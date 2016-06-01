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

    eliteApi.getLeagues()
      .then(function(data) {
        vm.leagues = data;
      });

    vm.selectLeague = selectLeague;

    function selectLeague(id) {
      eliteApi.setLeagueID(id);
      $state.go('app.teams',{id: id});
    }

  }
})();
