import angular from 'angular';

// @ts-ignore
import expansionPanelTemplate from './expansion-panel.template.html';

angular.module('expansionPanel.directive', []);

angular
  .module('expansionPanel.directive')
  .directive('appExpansionPanel', function() {
    return {
      replace: true,
      transclude: true,
      template: expansionPanelTemplate,
      controller: [
        '$element',
        function(
          /** @type {angular.IRootElementService} */
          $element
        ) {
          /**
           * @param {Event} event
           */
          this.onToggle = function(event) {
            // Do height calculations here ...
          };
        },
      ],
    };
  });
