/**
 * Created by Marcidius on 5/14/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp')
    .controller('TeamsController', TeamsController);

  TeamsController.$inject = ['eliteApi'];
  function TeamsController(eliteApi) {
    var vm = this;

    var data = eliteApi.getLeagueData();
    vm.teams = data.teams;
  }
})();

