(function() {
  'use strict';

  /**
   * @ngdoc route
   * @name roadtodhApp.route:login
   * @function
   * @description
   * # login
   * Route in the roadtodhApp.
   */
  angular.module('roadtodhApp')
    /* @ngInject */
    .config(function ($stateProvider) {

      var Login = {
        name: 'login',
        url: '/login',
        templateUrl: 'modules/login/login.template.html',
        controller: 'Login',
        controllerAs: 'login'
      };

      $stateProvider.state(Login);
    });
})();
