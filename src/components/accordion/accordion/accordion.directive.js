import angular from 'angular';

// @ts-ignore
import accordionTemplate from './accordion.template.html';

angular.module('accordion.directive', []);

angular.module('accordion.directive').directive('appAccordion', function() {
  return {
    replace: true,
    transclude: true,
    template: accordionTemplate,
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
