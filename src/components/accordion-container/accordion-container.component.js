import angular from 'angular';

// @ts-ignore
import accordionContainerTemplate from './accordion-container.template.html';
import accordionData from '../accordion/accordion/accordion-data';

angular.module('accordionContainer.component', ['accordion']);

angular
  .module('accordionContainer.component')
  .component('appAccordionContainer', {
    template: accordionContainerTemplate,
    controller: [
      function() {
        this.accordionData = accordionData;
      },
    ],
  });
