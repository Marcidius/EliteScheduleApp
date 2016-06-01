/**
 * Created by Marcidius on 5/14/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp')
    .controller('StandingsController', StandingsController);

  StandingsController.$inject = ['eliteApi'];
  function StandingsController(eliteApi) {
    var vm = this;

    eliteApi.getLeagueData()
      .then(function(data) {
        vm.standings = data.standings;
      });
  }
})();
