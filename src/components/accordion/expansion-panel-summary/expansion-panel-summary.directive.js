import angular from 'angular';

import '../../arrow-icon/arrow-icon.module';

// @ts-ignore
import summaryTemplate from './expansion-panel-summary.template.html';

angular.module('expansionPanelSummary.directive', ['arrow-icon']);

angular
  .module('expansionPanelSummary.directive')
  .directive('appExpansionPanelSummary', function() {
    return {
      replace: true,
      transclude: true,
      template: summaryTemplate,
      controller: [
        '$scope',
        function($scope) {
          let isKeyboardEvent = false;

          /**
           *
           * @param {HTMLElement} element
           */
          function isArrowIcon(element) {
            return (
              element.classList.contains('expansion-panel__icon') ||
              element.parentElement.classList.contains('expansion-panel__icon')
            );
          }

          /**
           * @param {MouseEvent} event
           */
          $scope.onSummaryClick = function(event) {
            // @ts-ignore
            if (isArrowIcon(event.target)) return;

            if (isKeyboardEvent) {
              isKeyboardEvent = false;
              return;
            }

            event.preventDefault();
          };

          /**
           * @param {KeyboardEvent} event
           */
          $scope.onSummaryKeyDown = function(event) {
            const isKeyboardClick = ['Enter', ' '].includes(event.key);

            const isClickOnSummary = event.target === event.currentTarget;

            isKeyboardEvent = isKeyboardClick && isClickOnSummary;
          };

          $scope.onSummaryFocus = function(event) {
            console.log('focus');
            event.currentTarget.classList.add(
              'expandable-panel__summary--keyboard-focused'
            );
          };

          $scope.onSummaryBlur = function(event) {
            console.log('blur');
            event.currentTarget.classList.remove(
              'expandable-panel__summary--keyboard-focused'
            );
          };
        },
      ],
    };
  });
