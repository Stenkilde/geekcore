(function() {
  'use strict';

  /**
   * @ngdoc route
   * @name geekcoreApp.route:login
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
      var Register = {
        name: 'register',
        url : '/register',
        templateUrl: 'modules/login/register.template.html',
        controller: 'Register',
        controllerAs: 'login',
        resolve: {
          user: function(Auth) {
            return Auth.resolveUser();
          }
        }
      };

      $stateProvider.state(Login);
      $stateProvider.state(Register);
    });
})();
