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
	function Main($scope, Post) {
		/*jshint validthis: true */
		var vm = this;

		vm.posts = [];
		vm.post = {subject: '', body_text: ''};

		vm.submitPost = function () {
			Post.create(vm.post).then(function () {
				vm.post = {subject: '', body_text: ''};
			});
		};

		vm.deletePost = function (post) {
			Post.delete(post);
		};

		activate();

		function activate() {

		};
	};

})();
