/**
 * Created by Marcidius on 5/14/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp')
    .controller('LeaguesController', LeaguesController);

  LeaguesController.$inject = ['eliteApi', '$state'];
  function LeaguesController(eliteApi, $state) {
    var vm = this;
    //var leagues = eliteApi.getLeagues();
    //var leagueData = eliteApi.getLeagueData();
    vm.leagues = eliteApi.getLeagues();
    vm.leagueData = eliteApi.getLeagueData();

    vm.selectLeague = selectLeague;

    function selectLeague(id) {
      //TODO: select correct league
      $state.go("app.teams");
    }

  }
})();
