/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Execution Metrics Schema
 *   version: not applicable
 */

import { z } from '@kbn/zod';

export type RuleExecutionMetrics = z.infer<typeof RuleExecutionMetrics>;
export const RuleExecutionMetrics = z.object({
  /**
   * Total time spent performing ES searches as measured by Kibana; includes network latency and time spent serializing/deserializing request/response
   */
  total_search_duration_ms: z.number().int().min(0).optional(),
  /**
   * Total time spent indexing documents during current rule execution cycle
   */
  total_indexing_duration_ms: z.number().int().min(0).optional(),
  /**
   * Total time spent enriching documents during current rule execution cycle
   */
  total_enrichment_duration_ms: z.number().int().min(0).optional(),
  /**
   * Duration in seconds of execution gap
   */
  execution_gap_duration_s: z.number().int().min(0).optional(),
});
