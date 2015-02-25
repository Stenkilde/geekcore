(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name roadtodhApp.controller:PostctrlCtrl
	 * @description
	 * # PostctrlCtrl
	 * Controller of the roadtodhApp
	 */
	angular
		.module('roadtodhApp')
		.controller('Postctrl', Postctrl);

	/* @ngInject */
	function Postctrl(Posts, $scope) {
		/*jshint validthis: true */
		var vm = this;

		activate();

		function activate() {

		};

		vm.posts = Post.all;
		vm.post = {name: ''};

		vm.submitPost = function () {
			Post.create(vm.post).then(function () {
				vm.post = {name: ''};
			});
		};

		vm.deletePost = function (post) {
			Post.delete(post);
		};



	};

})();
