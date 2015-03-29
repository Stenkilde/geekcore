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

      var childPost = {
        name: 'main.childPost',
        url: 'post',
        views: {
          'post@main': {
            templateUrl: 'modules/main/main.post.html'
          }
        }
      };

      var childThread = {
        name: 'main.childThread',
        url: 'thread',
        views: {
          'thread@main': {
            templateUrl: 'modules/main/main.thread.html'
          }
        }
      };

      var Postview = {
        name: 'main.postview',
        url: '/posts/:postId',
        views: {
          'singlepost@main': {
            templateUrl: 'modules/postview/postview.template.html',
            controller: 'Postview',
            controllerAs: 'postview'
          }
        }
      };

      $stateProvider.state(Main);
      $stateProvider.state(childPost);
      $stateProvider.state(childThread);
      $stateProvider.state(Postview);
    });
})();
