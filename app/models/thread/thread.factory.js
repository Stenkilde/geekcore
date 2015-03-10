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
			}
		];

		return Threads;


		var service = {
			//method references
		};

		return service;

		//function method() { };
	};

})();
