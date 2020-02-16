import angular from 'angular';

// @ts-ignore
import accordionTemplate from './accordion.template.html';

angular.module('accordion.component', []);

angular.module('accordion.component').component('appAccordion', {
  transclude: true,
  template: accordionTemplate,
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

            parentPanel.style.setProperty(
              '--expansion-panel-border-height',
              `${panel.getBoundingClientRect().top -
                parentPanel.getBoundingClientRect().top}px`
            );
          });
        });
      });

      this.$onInit = function() {
        resizeObserver.observe($element.children()[0]);
      };

      this.$onDestroy = function() {
        resizeObserver.disconnect();
      };
    },
  ],
});
