/**
 * Created by Marcidius on 5/14/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp')
    .controller('LocationsController', LocationsController);

  LocationsController.$inject = ['eliteApi'];
  function LocationsController(eliteApi) {
    var vm = this;

    var data = eliteApi.getLeagueData();
    vm.locations = data.locations;
  }
})();

