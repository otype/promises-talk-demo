angular.module('myApp.AppController', [])
  .controller('AppController', ['$scope', function ($scope) {
    'use strict';

    $scope.welcomeMessage = 'Welcome to the promise talk!';
  }]);
