(function() {
  'use strict';

  /**
   * @ngdoc route
   * @name roadtodhApp.route:main
   * @function
   * @description
   * # main
   * Route in the roadtodhApp.
   */
  angular.module('roadtodhApp')
    /* @ngInject */
    .config(function ($stateProvider) {

      var Main = {
        name: 'main',
        url: '/',
        templateUrl: 'modules/main/main.template.html',
        controller: 'Main',
        controllerAs: 'main'
      };

      $stateProvider.state(Main);
    });
})();
