(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name roadtodhApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the roadtodhApp
	 */
	angular
		.module('roadtodhApp')
		.controller('Main', Main);

	/* @ngInject */
	function Main(Thread) {
		/*jshint validthis: true */
		var vm = this;
		vm.threads = threads;

		threads = Thread;

		activate();

		function activate() {

		};
	};

})();
