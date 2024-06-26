/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { FC } from 'react';
import React from 'react';
import { i18n } from '@kbn/i18n';
import { EuiToolTip } from '@elastic/eui';
import { createPermissionFailureMessage } from '../../../../../capabilities/check_capabilities';
import type { DataFrameAnalyticsListRow } from '../analytics_list/common';
import { isDataFrameAnalyticsRunning } from '../analytics_list/common';

export const deleteActionNameText = i18n.translate(
  'xpack.ml.dataframe.analyticsList.deleteActionNameText',
  {
    defaultMessage: 'Delete',
  }
);

interface DeleteActionNameProps {
  isDisabled: boolean;
  item: DataFrameAnalyticsListRow;
}

export const DeleteActionName: FC<DeleteActionNameProps> = ({ isDisabled, item }) => {
  if (isDisabled) {
    return (
      <EuiToolTip
        position="top"
        content={
          isDataFrameAnalyticsRunning(item.stats.state)
            ? i18n.translate(
                'xpack.ml.dataframe.analyticsList.deleteActionDisabledToolTipContent',
                {
                  defaultMessage: 'Stop the data frame analytics job in order to delete it.',
                }
              )
            : createPermissionFailureMessage('canStartStopDataFrameAnalytics')
        }
      >
        <>{deleteActionNameText}</>
      </EuiToolTip>
    );
  }

  return <>{deleteActionNameText}</>;
};
