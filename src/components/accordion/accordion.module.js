import angular from 'angular';

import './accordion/accordion.component';
import './expansion-panel/expansion-panel.directive';
import './expansion-panel-details/expansion-panel-details.directive';
import './expansion-panel-summary/expansion-panel-summary.directive';

angular.module('accordion', ['accordion.component']);
