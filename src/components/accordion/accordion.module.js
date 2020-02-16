import angular from 'angular';

import './expansion-panel/expansion-panel.directive';
import './expansion-panel-details/expansion-panel-details.directive';
import './expansion-panel-summary/expansion-panel-summary.directive';

angular.module('accordion', [
  'expansionPanel.directive',
  'expansionPanelDetails.directive',
  'expansionPanelSummary.directive',
]);
