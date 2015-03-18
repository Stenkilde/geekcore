(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name roadtodhApp.factory:Thread
	 * @description
	 * # Thread
	 * Factory of the roadtodhApp
	 */
	angular
		.module('roadtodhApp')
		.factory('Thread', Thread);

	/* @ngInject */
	function Thread() {
		var Threads = {};

		Threads.post = [
			{
				title: "Title 1",
				body_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, officia."
			},
			{
				title: "Robert Downey Jr.",
				body_text: "Tony Stark / Iron Man"
			},
			{
				title: "Chris Evans",
				body_text: "Steve Rogers / Captain America"
			}
		];

		return Threads;

	};

})();
