(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name geekcoreApp.factory:Auth
	 * @description
	 * # Auth
	 * Factory of the geekcoreApp
	 */
	angular
		.module('roadtodhApp')
		.factory('Auth', Auth);

	/* @ngInject */
	function Auth($firebaseAuth, API_URL) {
		var ref = new Firebase(API_URL);
		return $firebaseAuth(ref);
	}

})();
