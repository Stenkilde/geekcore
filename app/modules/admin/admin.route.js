(function() {
  'use strict';

  /**
   * @ngdoc route
   * @name roadtodhApp.route:admin
   * @function
   * @description
   * # admin
   * Route in the roadtodhApp.
   */
  angular.module('roadtodhApp')
    /* @ngInject */
    .config(function ($stateProvider) {

      var Admin = {
        name: 'admin',
        url: '/admin',
        templateUrl: 'modules/admin/admin.template.html',
        controller: 'Main',
        controllerAs: 'main'
      };

      $stateProvider.state(Admin);
    });
})();
