import angular from 'angular';
import 'angular-route';

// @ts-ignore
import pageNotFoundTemplate from './pages/404.html';
// @ts-ignore
import indexTemplate from './pages/index.html';

import './components/counter/counter.module';
import './components/accordion/accordion.module';
import './components/table/table.module';
import './components/accordion-container/accordion-container.module';

angular.module('app', [
  'ngRoute',
  'counter',
  'accordion',
  'table',
  'accordionContainer',
]);

angular.module('app').config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        template: indexTemplate,
      })
      .otherwise({
        template: pageNotFoundTemplate,
      });
  },
]);
