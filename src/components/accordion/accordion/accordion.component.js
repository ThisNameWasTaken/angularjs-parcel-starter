import angular from 'angular';

// @ts-ignore
import accordionTemplate from './accordion.template.html';

angular.module('accordion.component', []);

angular.module('accordion.component').component('appAccordion', {
  transclude: true,
  template: accordionTemplate,
  controller: [
    '$element',
    function(
      /** @type {angular.IRootElementService} */
      $element
    ) {
      this.$onInit = function() {
        console.log('Init');
      };

      this.$onDestroy = function() {
        console.log('Destroy');
      };
    },
  ],
});
