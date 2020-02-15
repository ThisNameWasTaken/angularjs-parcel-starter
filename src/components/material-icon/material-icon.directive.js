import angular from 'angular';

// @ts-ignore
import materialIconTemplate from './material-icon.template.html';

angular.module('material-icon.directive', []);

angular.module('material-icon.directive').directive('materialIcon', function() {
  return {
    restrict: 'E',
    template: materialIconTemplate,
    replace: true,
    transclude: true,
  };
});
