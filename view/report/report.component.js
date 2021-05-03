'use strict';

angular.
  module('view.report').
  component('report', {
    templateUrl: 'view/report/report.template.html',
    controller: ['$routeParams', 'Report',
      async function reportController($routeParams, Report) {
        this.qDocId = $routeParams.qDocId;
        this.qId = $routeParams.qId;

        this.layout = await Report.get({
          command: 'sheet',
          app: this.qDocId,
          sheet: this.qId,
        }).$promise
          .then((result) => {

            return result.cells;
          })
          .catch((error) => {
            console.log('%c*** error ***', 'background: #FF0000; color: #FFFFFF; font-weight: bold;');
            console.log(error);
          });
      }
    ]
  });