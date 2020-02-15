import angular from 'angular';

import '../material-icon/material-icon.module';

// @ts-ignore
import accordionTemplate from './accordion.template.html';

angular.module('accordion.component', ['material-icon']);

angular.module('accordion.component').component('appAccordion', {
  template: accordionTemplate,
  controller: ['$scope', function($scope) {}],
});
