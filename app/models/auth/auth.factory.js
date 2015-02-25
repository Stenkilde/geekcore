(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name roadtodhApp.factory:Auth
	 * @description
	 * # Auth
	 * Factory of the roadtodhApp
	 */
	angular
		.module('roadtodhApp')
		.factory('Auth', Auth);

	/* @ngInject */
	function Auth(API_URL) {

		var authRef = new Firebase(API_URL);

	}

})();
