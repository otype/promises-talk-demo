angular.module('myApp', [
  'ngRoute',
  'myApp.routes',
  'myApp.1_CallbacksController',
  'myApp.2_PromisesController',
  'myApp.3_PromiseChainingController',
  'myApp.AppController'
]);

angular.module('myApp.routes', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/base.html',
        controller: 'AppController'
      })
      .when('/callbacks', {
        templateUrl: 'views/1_callbacks.html',
        controller: '1_CallbacksController'
      })
      .when('/promises', {
        templateUrl: 'views/2_promises.html',
        controller: '2_PromisesController'
      })
      .when('/promise_chaining', {
        templateUrl: 'views/3_promise_chaining.html',
        controller: '3_PromiseChainingController'
      })
      .otherwise({ redirectTo: '/' });
  }]);
