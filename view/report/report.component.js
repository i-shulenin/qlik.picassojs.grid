'use strict';

angular.
  module('view.report').
  component('report', {
    templateUrl: 'view/report/report.template.html',
    controller: ['$routeParams', 'Report',
      function reportController($routeParams, Report) {
        this.qDocId = $routeParams.qDocId;
        this.qId = $routeParams.qId;
      }
    ]
  });