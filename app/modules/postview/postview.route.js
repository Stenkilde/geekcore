(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name roadtodhApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the roadtodhApp
   */
  angular
      .module('roadtodhApp')
    /* @ngInject */
    .config(function ($stateProvider) {

      var Postview = {
        name: 'postview',
        url: '/posts/:postId',
        templateUrl: 'modules/postview/postview.template.html',
        controller: 'Postview',
        controllerAs: 'postview'
      };

      $stateProvider.state(Postview);
    });
})();
