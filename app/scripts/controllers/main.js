'use strict';

/**
 * @ngdoc function
 * @name stagetestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stagetestApp
 */
angular.module('stagetestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
