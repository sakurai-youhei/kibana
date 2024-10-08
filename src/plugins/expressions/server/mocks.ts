/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { coreMock } from '@kbn/core/server/mocks';
import { ExpressionsServerSetup, ExpressionsServerStart } from '.';
import { plugin as pluginInitializer } from '.';

export type Setup = jest.Mocked<ExpressionsServerSetup>;
export type Start = jest.Mocked<ExpressionsServerStart>;

const createSetupContract = (): Setup => ({
  fork: jest.fn(),
  getFunction: jest.fn(),
  getFunctions: jest.fn(),
  getTypes: jest.fn(),
  registerFunction: jest.fn(),
  registerRenderer: jest.fn(),
  registerType: jest.fn(),
  getAllMigrations: jest.fn(),
});

const createStartContract = (): Start =>
  ({
    execute: jest.fn(),
    getFunction: jest.fn(),
    getRenderer: jest.fn(),
    getType: jest.fn(),
    run: jest.fn(),
    telemetry: jest.fn(),
    extract: jest.fn(),
    inject: jest.fn(),
    getAllMigrations: jest.fn(),
  } as unknown as Start);

const createPlugin = async () => {
  const pluginInitializerContext = coreMock.createPluginInitializerContext();
  const coreSetup = coreMock.createSetup();
  const coreStart = coreMock.createStart();
  const plugin = await pluginInitializer(pluginInitializerContext);
  const setup = await plugin.setup(coreSetup);

  return {
    pluginInitializerContext,
    coreSetup,
    coreStart,
    plugin,
    setup,
    doStart: async () => await plugin.start(coreStart),
  };
};

export const expressionsPluginMock = {
  createSetupContract,
  createStartContract,
  createPlugin,
};
