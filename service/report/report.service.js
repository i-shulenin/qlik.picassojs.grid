'use strict';

angular.
  module('service.report').
  factory('Report', ['$resource', 'Constant',
    function($resource, Constant) {
      const url = `${Constant.api}/qlik/:command.json`;

      return $resource(url, {});
    }
  ]);