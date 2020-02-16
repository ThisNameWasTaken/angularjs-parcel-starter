import angular from 'angular';

import detailsTemplate from './accordion-details.template.html';

angular.module('accordion.details.directive', []);

angular
  .module('accordion.details.directive')
  .directive('appAccordionDetails', function() {
    return {
      replace: true,
      transclude: true,
      template: detailsTemplate,
    };
  });
