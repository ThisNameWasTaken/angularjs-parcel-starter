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
      scope: {
        onOpen: '&',
        onClose: '&',
        onToggle: '&',
      },
      controller: [
        '$scope',
        function(
          /** @type {angular.IRootScopeService} */
          $scope
        ) {
          /**
           * @param {Event} event
           */
          $scope._onToggle = function(event) {
            console.log($scope);

            if ($scope.onToggle) {
              $scope.onToggle(event);
            }

            const isOpen = !event.currentTarget.open;

            if (isOpen) {
              if ($scope.onOpen) {
                $scope.onOpen(event);
              }
            } else {
              if ($scope.onOpen) {
                $scope.onClose(event);
              }
            }
          };
        },
      ],
    };
  });
