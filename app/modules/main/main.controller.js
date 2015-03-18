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

		$scope.posts = [];
		$scope.post = {subject: '', body_text: ''};

		$scope.submitPost = function() {
			Post.save($scope.post, function(ref) {
				$scope.posts[ref.name] = $scope.post;
				$scope.post = {subject: '', body_text: ''};
			});
		};

		activate();

		function activate() {

		};
	};

})();
