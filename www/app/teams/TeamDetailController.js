/**
 * Created by Marcidius on 5/12/2016.
 */
(function () {
  'use strict';

  angular.module('eliteApp')
    .controller('TeamDetailController', TeamDetailController);

  TeamDetailController.$inject = ['$stateParams'];
  function TeamDetailController($stateParams) {
    var vm = this;
    console.log('$stateParams', $stateParams);

  }
})();
