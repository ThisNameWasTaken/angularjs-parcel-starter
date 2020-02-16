import angular from 'angular';

import arrowIconTemplate from './arrow-icon.template.html';

angular.module('arrow-icon.directive', []);

angular
  .module('arrow-icon.directive', [])
  .directive('appArrowIcon', function() {
    return {
      replace: true,
      template: arrowIconTemplate,
    };
  });
