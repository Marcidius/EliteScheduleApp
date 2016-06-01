/**
 * Created by Marcidius on 5/14/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp')
    .controller('TeamsController', TeamsController);

  TeamsController.$inject = ['eliteApi', '$http'];
  function TeamsController(eliteApi, $http) {
    var vm = this;

    eliteApi.getLeagueData()
      .then(function(data) {
        vm.teams = data.teams;
      });

  }
})();

