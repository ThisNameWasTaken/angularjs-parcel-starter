import angular from 'angular';

import './accordion/accordion.directive';
import './accordion-details/accordion-details.directive';
import './accordion-summary/accordion-summary.directive';

angular.module('accordion', [
  'accordion.directive',
  'accordion.details.directive',
  'accordion.summary.directive',
]);
