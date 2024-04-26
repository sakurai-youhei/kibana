/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { CoreStart } from '@kbn/core/public';
import type { PresentationLabsService } from '@kbn/presentation-util-plugin/public';

export interface DashboardSettingsService {
  uiSettings: CoreStart['uiSettings'];
  i18n: CoreStart['i18n'];
  theme: CoreStart['theme'];
  isProjectEnabledInLabs: PresentationLabsService['isProjectEnabled'];
}
