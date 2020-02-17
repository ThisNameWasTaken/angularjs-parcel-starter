import angular from 'angular';
// import 'devextreme/dist/js/dx.all';

// @ts-ignore
import tableTemplate from './table.template.html';

angular.module('table.component', []);

angular.module('table.component').component('appTable', {
  bindings: {
    data: '<',
    columns: '<',
  },
  template: tableTemplate,
  transclude: true,
  controller: [
    function() {
      this.$onChanges = function() {
        this.columns = this.columns || Object.keys(this.data && this.data[0]);

        this.dataGridOptions = {
          dataSource: this.data,
          columns: this.columns,
          showBorders: true,
          allowColumnReordering: true,
        };
      };
    },
  ],
});
