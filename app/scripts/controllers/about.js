'use strict';

/**
 * @ngdoc function
 * @name stagetestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the stagetestApp
 */
angular.module('stagetestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
