angular.module('myApp.1_CallbacksController', [])
  .controller('1_CallbacksController', ['$scope', '$timeout', function ($scope, $timeout) {
    'use strict';

    $scope.answer = 0;

    // dadd
    function add5(a, done) {
      $timeout(function () {
        var b = 5;
        console.log(a + ' + ' + b);
        done(a + b);
      }, 600);
    }

    // dmul
    function multiply2(a, done) {
      $timeout(function () {
        var b = 2;
        console.log(a + ' * ' + b);
        done(a * b);
      }, 900);
    }

    // dsub
    function subtract3(a, done) {
      $timeout(function () {
        var b = 3;
        console.log(a + ' - ' + b);
        done(a - b);
      }, 1200);
    }


    $scope.calculate = function () {

      // Calculate here
      add5(4, function (resultsFromAdd) {
        multiply2(resultsFromAdd, function (resultsFromMul) {
          subtract3(resultsFromMul, function (resultsFromSub) {
            $scope.answer = resultsFromSub;
          });
        });
      });

    };

  }]);
