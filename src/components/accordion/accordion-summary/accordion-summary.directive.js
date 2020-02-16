import angular from 'angular';

import '../../arrow-icon/arrow-icon.module';

import summaryTemplate from './accordion-summary.template.html';

angular.module('accordion.summary.directive', ['arrow-icon']);

angular
  .module('accordion.summary.directive')
  .directive('appAccordionSummary', function() {
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
              element.classList.contains('accordion__icon') ||
              element.parentElement.classList.contains('accordion__icon')
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
        },
      ],
    };
  });
