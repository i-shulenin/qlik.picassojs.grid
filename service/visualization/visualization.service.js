'use strict';

angular.
  module('service.visualization').
  factory('Visualization', ['$resource',
    function($resource) {
      const url = '/api/v1/qlik/visualization/:command';

      return $resource(url, {});
    }
  ]);
