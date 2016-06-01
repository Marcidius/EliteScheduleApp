/**
 * Created by Marcidius on 5/27/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp')
    .controller('GameController', GameController);

  GameController.$inject = ['$stateParams', 'eliteApi'];
  function GameController($stateParams, eliteApi) {
    var vm = this;

    var gameId = Number($stateParams.id);
    eliteApi.getLeagueData()
      .then(function(data) {
        vm.game = _.find(data.games, {"id": gameId});
      });
  }
})();

