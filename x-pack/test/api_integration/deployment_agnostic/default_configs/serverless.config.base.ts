/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import { FtrConfigProviderContext, Config } from '@kbn/test';

import { ServerlessProjectType } from '@kbn/es';
import { DeploymentAgnosticCommonServices, services } from '../services';

interface CreateTestConfigOptions<T extends DeploymentAgnosticCommonServices> {
  serverlessProject: ServerlessProjectType;
  esServerArgs?: string[];
  kbnServerArgs?: string[];
  services?: T;
  testFiles: string[];
  junit: { reportName: string };
  suiteTags?: { include?: string[]; exclude?: string[] };
}

// include settings from elasticsearch controller
// https://github.com/elastic/elasticsearch-controller/blob/main/helm/values.yaml
const esServerArgsFromController = {
  es: [],
  oblt: [
    'xpack.apm_data.enabled=true',
    // for ML, data frame analytics are not part of this project type
    'xpack.ml.dfa.enabled=false',
  ],
  security: [
    'xpack.security.authc.api_key.cache.max_keys=70000',
    'data_streams.lifecycle.retention.factory_default=365d',
    'data_streams.lifecycle.retention.factory_max=365d',
  ],
};

// include settings from kibana controller
// https://github.com/elastic/kibana-controller/blob/main/internal/controllers/kibana/config/config_settings.go
const kbnServerArgsFromController = {
  es: [
    // useful for testing (also enabled in MKI QA)
    '--coreApp.allowDynamicConfigOverrides=true',
  ],
  oblt: [
    '--coreApp.allowDynamicConfigOverrides=true',
    // defined in MKI control plane
    '--xpack.uptime.service.manifestUrl=mockDevUrl',
  ],
  security: [
    '--coreApp.allowDynamicConfigOverrides=true',
    // disable fleet task that writes to metrics.fleet_server.* data streams, impacting functional tests
    `--xpack.task_manager.unsafe.exclude_task_types=${JSON.stringify(['Fleet-Metrics-Task'])}`,
  ],
};

export function createServerlessTestConfig<T extends DeploymentAgnosticCommonServices>(
  options: CreateTestConfigOptions<T>
) {
  return async ({ readConfigFile }: FtrConfigProviderContext): Promise<Config> => {
    if (options.esServerArgs || options.kbnServerArgs) {
      throw new Error(
        `FTR doesn't provision custom ES/Kibana server arguments into the serverless project on MKI.
  It may lead to unexpected test failures on Cloud. Please contact #appex-qa.`
      );
    }

    const svlSharedConfig = await readConfigFile(
      require.resolve('@kbn/test-suites-serverless/shared/config.base')
    );

    return {
      ...svlSharedConfig.getAll(),

      services: {
        // services can be customized, but must extend DeploymentAgnosticCommonServices
        ...(options.services || services),
      },
      esTestCluster: {
        ...svlSharedConfig.get('esTestCluster'),
        serverArgs: [
          ...svlSharedConfig.get('esTestCluster.serverArgs'),
          ...esServerArgsFromController[options.serverlessProject],
        ],
      },
      kbnTestServer: {
        ...svlSharedConfig.get('kbnTestServer'),
        serverArgs: [
          ...svlSharedConfig.get('kbnTestServer.serverArgs'),
          ...kbnServerArgsFromController[options.serverlessProject],
          `--serverless=${options.serverlessProject}`,
        ],
      },
      testFiles: options.testFiles,
      junit: options.junit,
      suiteTags: options.suiteTags,
    };
  };
}
