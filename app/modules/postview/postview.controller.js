(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name roadtodhApp.controller:PostView
	 * @description
	 * # MainCtrl
	 * Controller of the roadtodhApp
	 */
	angular
		.module('roadtodhApp')
		.controller('Postview', Postview);

	/* @ngInject */
	function Postview($stateParams, Post) {
		/*jshint validthis: true */
		var vm = this;

		vm.post = Post.get($stateParams.postId);

		activate();

		function activate() {

		};
	};

})();
