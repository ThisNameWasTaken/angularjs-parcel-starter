import angular from 'angular';

import '../material-icon/material-icon.module';

// @ts-ignore
import counterTemplate from './counter.template.html';

angular.module('counter.component', ['material-icon']);

angular.module('counter.component').component('appCounter', {
  template: counterTemplate,
  controller: [
    '$scope',
    function($scope) {
      this.count = 0;
      this.incrementValue = 1;

      this.increment = function() {
        this.count = this.count + this.incrementValue;
      };

      this.decrement = function() {
        this.count = this.count - this.incrementValue;
      };

      this.reset = function() {
        this.count = 0;
        this.incrementValue = 1;
      };

      this.onInputBlur = function(event) {
        const isEmpty = !event.target.value;

        if (!isEmpty) return;

        this.incrementValue = 1;
      };
    },
  ],
});
