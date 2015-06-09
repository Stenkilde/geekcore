(function() {
  'use strict';

  /**
   * @ngdoc route
   * @name geekcoreApp.route:user
   * @function
   * @description
   * # user
   * Route in the geekcoreApp.
   */
  angular.module('roadtodhApp')
    /* @ngInject */
    .config(function ($stateProvider) {

      var User = {
        name: 'user',
        url: '/user',
        templateUrl: 'modules/user/user.template.html',
        controller: 'User',
        controllerAs: 'user'
      };

      $stateProvider.state(User);
    });
})();
