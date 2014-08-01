var $q = {resolve: function () {

}, promise: { then: function () {
  
}}, defer: function () {
}},
  url = '', successCb = function () {

  }, storeToDatabase = function () {
    
  }, provideToUI = function () {

  }, finallyCb = function () {

  };

        getApiData()
          .then(processResponse)
          .then(storeToDatabase)
          .then(provideToUI);





  function getAllApiData(urls) {
    var allPromises = [];

    angular.forEach(urls, function (url) {
      var deferred = $q.defer();
      getApiData(url).then(function (response) {
        deferred.resolve(response);
      });
      allPromises.push(deferred.promise);
    });

    return $q.all(allPromises);
  }


getAllApiData([]);


        function processResponse() {
          var
            deferred = $q.defer(),
            results = {};

          // long-running process ...
          deferred.resolve(results);

          return deferred.promise;
        }

        function getApiData(url) {
          var
            deferred = $q.defer(),
            results = {};

          // long-running process ...
          deferred.resolve(results);

          return deferred.promise;
        }


        getApiData('https://my.api.com').then(function (apiResponse) {
          processResponse(apiResponse).then(function (results) {
            alert(results);
          });
        });


        function Disclaimer() {
          // Please note ...
        }

        function a(done) {
          // do something
          done(res);
        }

        function b(data, done) {
          // do something
          done(res);
        }

        function c(data, done) {
          // do something
          done(res);
        }
        function d(data, done) {
          // do something
          done(res);
        }
        function e(data, done) {
          // do something
          done(res);
        }
        function f(data, done) {
          // do something
          done(res);
        }










  a(function (resultsFromA) {
    b(resultsFromA, function (resultsFromB) {
      c(resultsFromB, function (resultsFromC) {
        d(resultsFromC, function (resultsFromD) {
          e(resultsFromD, function (resultsFromE) {
            f(resultsFromE, function (resultsFromF) {
              console.log(resultsFromF);
            })
          })
        })
      })
    })
  });








Disclaimer();


//
//      function getRemoteData() {
//        // Long-running call
//      }
//
//      var remoteData = getRemoteData();
//      alert(remoteData);


//      function getRemoteData(done) {
//        var results = {};
//        // ... long-running call with results ...
//        done(results);
//      }
//
//      getRemoteData(function (remoteData) {
//        alert(remoteData);
//      });


