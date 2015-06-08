(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name geekcoreApp.controller:LoginCtrl
	 * @description
	 * # LoginCtrl
	 * Controller of the roadtodhApp
	 */
	angular
		.module('roadtodhApp')
		.controller('Login', Login);

	/* @ngInject */
	function Login(Auth, user) {
		/*jshint validthis: true */
		var vm = this;
		vm.register = register;

		if(user) {
			$stage.go('main');
		}

		register = function() {
			Auth.register(vm.user).then(function() {
				return Auth.login(vm.user).then(function() {
					$stage.go('main');
				});
			});
		};

	};

})();
