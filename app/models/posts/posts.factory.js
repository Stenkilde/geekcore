(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name roadtodhApp.factory:Posts
	 * @description
	 * # Posts
	 * Factory of the roadtodhApp
	 */
	angular
		.module('roadtodhApp')
		.factory('Post', Post);

	/* @ngInject */
	function Post($resource) {

		return $resource('https://geekforum.firebaseio.com/threads/:id.json');

	};

})();
