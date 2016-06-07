/**
 * Created by Marcidius on 5/14/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp')
    .service('eliteApi', eliteApi);

  eliteApi.$inject = ['$http', '$q', '$ionicLoading'];
  function eliteApi($http, $q, $ionicLoading) {

    var leagues = undefined;
    var leagueData = undefined;
    var currentLeagueID;

    //self.leaguesCache = DSCacheFactory.get('leaguesCache');
    //self.leagueDataCache = DSCacheFactory.get('leagueDataCache');

    var service = {
      getLeagueData: getLeagueData,
      getLeagues: getLeagues,
      setLeagueID: setLeagueID
    };

    return service;

    function getLeagues() {
      
      var deferred = $q.defer();
        //cacheKey = 'leagues'
        //leaguesData = self.leaguesCache.get(cacheKey);

      // if(leaguesData) {
      //   console.log('Found data inside cache', leaguesData);
      //   deferred.resolve(leaguesData);
      // }
      // else {

      $http.get('http://elite-schedule.net/api/leaguedata')
        .success(function (data) {
          //self.leaguesCache.put(cacheKey, data);
          deferred.resolve(data);
        })
        .error(function () {
          console.log('Error while making HTTP call to getLeagues.');
          deferred.reject();
        });

      // }
      return deferred.promise;
    }

    function getLeagueData() {
      var deferred = $q.defer();

      $ionicLoading.show({template: 'Loading...'});

      $http.get('http://elite-schedule.net/api/leaguedata/' + currentLeagueID)
        .success(function(data, status) {
          console.log('Received schedule data via HTTP XHR.', data, status);
          $ionicLoading.hide();
          deferred.resolve(data);
        })
        .error(function() {
          console.log('Error while making HTTP call to getLeagueData.');
          $ionicLoading.hide();
          deferred.reject();
        });

      return deferred.promise;
    }

    function setLeagueID(leagueID) {
      currentLeagueID = leagueID;
    }

  }
})();
