/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { ErrorBudget, Objective, Status } from '../models';

export function computeSummaryStatus(
  objective: Objective,
  sliValue: number,
  errorBudget: ErrorBudget
): Status {
  if (sliValue === -1) {
    return 'NO_DATA';
  }

  if (sliValue >= objective.target) {
    return 'HEALTHY';
  } else {
    return errorBudget.remaining > 0 ? 'DEGRADING' : 'VIOLATED';
  }
}
