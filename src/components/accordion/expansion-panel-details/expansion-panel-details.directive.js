import angular from 'angular';

import detailsTemplate from './expansion-panel-details.template.html';

angular.module('expansionPanelDetails.directive', []);

angular
  .module('expansionPanelDetails.directive')
  .directive('appExpansionPanelDetails', function() {
    return {
      replace: true,
      transclude: true,
      template: detailsTemplate,
    };
  });
