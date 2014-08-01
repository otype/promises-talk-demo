angular.module('myApp.2_PromisesController', [])
  .controller('2_PromisesController', ['$scope', '$q', '$timeout', function ($scope, $q, $timeout) {
    'use strict';

    $scope.answer = 0;

    // dpadd
    function add5(a) {
      var
        deferred = $q.defer(),
        b = 5;

      $timeout(function () {
        console.log(a + ' + ' + b);
        deferred.resolve(a + b);
      }, 600);

      return deferred.promise;
    }

    // dpmul
    function multiply2(a) {
      var
        deferred = $q.defer(),
        b = 2;

      $timeout(function () {
        console.log(a + ' * ' + b);
        deferred.resolve(a * b);
      }, 900);

      return deferred.promise;
    }

    // dpsub
    function subtract3(a) {
      var
        deferred = $q.defer(),
        b = 3;

      $timeout(function () {
        console.log(a + ' - ' + b);
        deferred.resolve(a - b);
      }, 1200);

      return deferred.promise;
    }

    $scope.calculate = function () {

      // calculate here
      add5(4).then(function (resultsFromAdd) {
        multiply2(resultsFromAdd).then(function (resultsFromMul) {
          $scope.answer = resultsFromMul;
        });
      })

    };

  }]);
