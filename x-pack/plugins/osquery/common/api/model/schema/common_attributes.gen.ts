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
 *   title: Common Osquery Attributes
 *   version: 2023-10-31
 */

import { z } from '@kbn/zod';

export type Id = z.infer<typeof Id>;
export const Id = z.string();

export type IdOrUndefined = z.infer<typeof IdOrUndefined>;
export const IdOrUndefined = Id.nullable();

export type AgentSelection = z.infer<typeof AgentSelection>;
export const AgentSelection = z.object({
  agents: z.array(z.string()).optional(),
  allAgentsSelected: z.boolean().optional(),
  platformsSelected: z.array(z.string()).optional(),
  policiesSelected: z.array(z.string()).optional(),
});

export type AgentSelectionOrUndefined = z.infer<typeof AgentSelectionOrUndefined>;
export const AgentSelectionOrUndefined = AgentSelection.nullable();

export type Description = z.infer<typeof Description>;
export const Description = z.string();

export type DescriptionOrUndefined = z.infer<typeof DescriptionOrUndefined>;
export const DescriptionOrUndefined = Description.nullable();

export type Platform = z.infer<typeof Platform>;
export const Platform = z.string();

export type PlatformOrUndefined = z.infer<typeof PlatformOrUndefined>;
export const PlatformOrUndefined = Platform.nullable();

export type Query = z.infer<typeof Query>;
export const Query = z.string();

export type QueryOrUndefined = z.infer<typeof QueryOrUndefined>;
export const QueryOrUndefined = Query.nullable();

export type Version = z.infer<typeof Version>;
export const Version = z.string();

export type VersionOrUndefined = z.infer<typeof VersionOrUndefined>;
export const VersionOrUndefined = Version.nullable();

export type Interval = z.infer<typeof Interval>;
export const Interval = z.string();

export type IntervalOrUndefined = z.infer<typeof IntervalOrUndefined>;
export const IntervalOrUndefined = Interval.nullable();

export type Snapshot = z.infer<typeof Snapshot>;
export const Snapshot = z.boolean();

export type SnapshotOrUndefined = z.infer<typeof SnapshotOrUndefined>;
export const SnapshotOrUndefined = Snapshot.nullable();

export type Removed = z.infer<typeof Removed>;
export const Removed = z.boolean();

export type RemovedOrUndefined = z.infer<typeof RemovedOrUndefined>;
export const RemovedOrUndefined = Removed.nullable();

export type PackName = z.infer<typeof PackName>;
export const PackName = z.string();

export type SavedQueryId = z.infer<typeof SavedQueryId>;
export const SavedQueryId = z.string();

export type SavedQueryIdOrUndefined = z.infer<typeof SavedQueryIdOrUndefined>;
export const SavedQueryIdOrUndefined = SavedQueryId.nullable();

export type PackId = z.infer<typeof PackId>;
export const PackId = z.string();

export type PackIdOrUndefined = z.infer<typeof PackIdOrUndefined>;
export const PackIdOrUndefined = PackId.nullable();

export type Enabled = z.infer<typeof Enabled>;
export const Enabled = z.boolean();

export type EnabledOrUndefined = z.infer<typeof EnabledOrUndefined>;
export const EnabledOrUndefined = Enabled.nullable();

export type PolicyIds = z.infer<typeof PolicyIds>;
export const PolicyIds = z.array(z.string());

export type PolicyIdsOrUndefined = z.infer<typeof PolicyIdsOrUndefined>;
export const PolicyIdsOrUndefined = PolicyIds.nullable();

export type ExecutionContext = z.infer<typeof ExecutionContext>;
export const ExecutionContext = z.object({
  name: z.string().nullable().optional(),
  url: z.string().nullable().optional(),
});

export type ExecutionContextOrUndefined = z.infer<typeof ExecutionContextOrUndefined>;
export const ExecutionContextOrUndefined = ExecutionContext.nullable();

export type ECSMappingItem = z.infer<typeof ECSMappingItem>;
export const ECSMappingItem = z.object({
  field: z.string().optional(),
  value: z.union([z.string(), z.array(z.string())]).optional(),
});

export type ECSMapping = z.infer<typeof ECSMapping>;
export const ECSMapping = z.object({}).catchall(ECSMappingItem);

export type ECSMappingOrUndefined = z.infer<typeof ECSMappingOrUndefined>;
export const ECSMappingOrUndefined = ECSMapping.nullable();

export type StringArrayOrUndefined = z.infer<typeof StringArrayOrUndefined>;
export const StringArrayOrUndefined = z.array(z.string().nullable());

export type ArrayQueriesItem = z.infer<typeof ArrayQueriesItem>;
export const ArrayQueriesItem = z.object({
  id: Id.optional(),
  query: Query.optional(),
  ecs_mapping: ECSMappingOrUndefined.optional(),
  version: VersionOrUndefined.optional(),
  platform: PlatformOrUndefined.optional(),
  removed: RemovedOrUndefined.optional(),
  snapshot: SnapshotOrUndefined.optional(),
});

export type ArrayQueries = z.infer<typeof ArrayQueries>;
export const ArrayQueries = z.array(ArrayQueriesItem);

export type ObjectQueriesItem = z.infer<typeof ObjectQueriesItem>;
export const ObjectQueriesItem = z.object({
  query: Query.optional(),
  id: Id.optional(),
  ecs_mapping: ECSMappingOrUndefined.optional(),
  version: VersionOrUndefined.optional(),
  platform: PlatformOrUndefined.optional(),
  saved_query_id: SavedQueryIdOrUndefined.optional(),
  removed: RemovedOrUndefined.optional(),
  snapshot: SnapshotOrUndefined.optional(),
});

export type ObjectQueries = z.infer<typeof ObjectQueries>;
export const ObjectQueries = z.object({}).catchall(ObjectQueriesItem);

export type Queries = z.infer<typeof Queries>;
export const Queries = z.union([ArrayQueries, ObjectQueries]);

export type QueriesOrUndefined = z.infer<typeof QueriesOrUndefined>;
export const QueriesOrUndefined = Queries.nullable();

export type KueryOrUndefined = z.infer<typeof KueryOrUndefined>;
export const KueryOrUndefined = z.string().nullable();

export type PageOrUndefined = z.infer<typeof PageOrUndefined>;
export const PageOrUndefined = z.number().int().nullable();

export type PageSizeOrUndefined = z.infer<typeof PageSizeOrUndefined>;
export const PageSizeOrUndefined = z.number().int().nullable();

export type SortOrUndefined = z.infer<typeof SortOrUndefined>;
export const SortOrUndefined = z.string().nullable();

export type SortOrderOrUndefined = z.infer<typeof SortOrderOrUndefined>;
export const SortOrderOrUndefined = z.union([z.string().nullable(), z.unknown()]);

export type Shards = z.infer<typeof Shards>;
export const Shards = z.object({}).catchall(z.number());

export type DefaultSuccessResponse = z.infer<typeof DefaultSuccessResponse>;
export const DefaultSuccessResponse = z.object({});
