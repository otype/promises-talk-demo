angular.module('myApp.3_PromiseChainingController', [])
  .controller('3_PromiseChainingController', ['$scope', '$q', '$timeout', function ($scope, $q, $timeout) {
    'use strict';

    $scope.answer = 0;

    // dpcadd
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

    // dpcmul
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

    // dpcsub
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

    function divide9(a) {
      var deferred = $q.defer();

      if (a < 50) {
        deferred.resolve(a / 9);
      } else {
        deferred.reject('does not work');
      }

      return deferred.promise;
    }

    $scope.calculate = function () {

      add5(4)
        .then(add5)
        .then(add5)
        .then(add5)
        .then(add5)
        .then(multiply2)
        .then(multiply2)
        .then(multiply2)
        .then(multiply2)
        .then(subtract3)
        .then(function (results) {
          $scope.answer = results;
        });

    };

  }]);
