(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name geekcoreApp.controller:UserCtrl
	 * @description
	 * # UserCtrl
	 * Controller of the geekcoreApp
	 */
	angular
		.module('roadtodhApp')
		.controller('User', User);

	/* @ngInject */
	function User(Auth) {
		/*jshint validthis: true */
		var vm 			= this;
		vm.userSignup 	= userSignup;
		//vm.userLogin	= userLogin;
		vm.username		= null;
		vm.password		= null;
		vm.message		= null;
		vm.error		= null;


		function userSignup(username, password) {
			Auth.$createUser({
				email: username,
				password: password
			}).then(function(userData) {
				vm.message = 'User created with uId' + userData.uId;
				$state.go('user');
			}).catch(function(error) {
				vm.error = error;
			});
		}

		activate();

		function activate() {

		};
	};

})();
