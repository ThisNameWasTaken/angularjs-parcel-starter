import angular from 'angular';

import '../expansion-panel/expansion-panel.directive';
import '../expansion-panel-summary/expansion-panel-summary.directive';
import '../expansion-panel-details/expansion-panel-details.directive';

// @ts-ignore
import accordionTemplate from './accordion.template.html';

angular.module('accordion.component', [
  'expansionPanel.directive',
  'expansionPanelSummary.directive',
  'expansionPanelDetails.directive',
]);

angular.module('accordion.component').component('appAccordion', {
  transclude: true,
  template: accordionTemplate,
  bindings: {
    data: '<',
  },
  controller: [
    '$element',
    function(
      /** @type {angular.IRootElementService} */
      $element
    ) {
      /**
       *
       * @param {Element} expansionPanel
       */
      function findParentExpansionPanel(expansionPanel) {
        let parentExpansionPanel = expansionPanel.parentElement;

        while (
          !parentExpansionPanel.classList.contains('expansion-panel') &&
          !parentExpansionPanel.classList.contains('accordion')
        ) {
          parentExpansionPanel = parentExpansionPanel.parentElement;
        }

        return parentExpansionPanel;
      }

      const resizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
          const lastExpansionPanels = Array.from(
            entry.target.querySelectorAll('.expansion-panel:last-child')
          );

          lastExpansionPanels.forEach(panel => {
            const parentPanel = findParentExpansionPanel(panel);

            const panelTop = panel.getBoundingClientRect().top;
            const parentPanelTop = parentPanel.getBoundingClientRect().top;

            const borderHeight = Math.max(panelTop - parentPanelTop, 0);

            parentPanel.style.setProperty(
              '--expansion-panel-border-height',
              `${borderHeight}px`
            );
          });

          const panels = Array.from(
            entry.target.querySelectorAll('.expansion-panel')
          );

          panels.forEach(panel => {
            const childPanel = panel.querySelector('.expansion-panel');

            if (childPanel) return;

            const summaryHeight = panel
              .querySelector('.expansion-panel__summary')
              .getBoundingClientRect().height;

            panel.style.setProperty(
              '--last-expansion-panel-border-height',
              `${summaryHeight}px`
            );
          });
        });
      });

      this.$onInit = function() {
        resizeObserver.observe($element[0]);
      };

      this.$onDestroy = function() {
        resizeObserver.disconnect();
      };
    },
  ],
});
