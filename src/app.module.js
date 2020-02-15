import angular from 'angular';
import 'angular-route';

// @ts-ignore
import pageNotFoundTemplate from './pages/404.html';
// @ts-ignore
import indexTemplate from './pages/index.html';

import './components/counter/counter.module';
import './components/accordion/accordion.module';

angular.module('app', ['ngRoute', 'counter', 'accordion']);

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
