(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name roadtodhApp.factory:Posts
	 * @description
	 * # Posts
	 * Factory of the roadtodhApp
	 */
	angular
		.module('roadtodhApp')
		.factory('Post', Post);

	/* @ngInject */
	function Post($firebase, API_URL) {

		var ref = new Firebase(API_URL);
		var posts = $firebase(ref.child('posts')).$asArray();

		var Post = {
			all: posts,
			create: function (post) {
				return posts.$add(post);
			},
			get: function (postId) {
				return $firebase(ref.child('posts').child(postId)).$asObject();
			},
			delete: function (post) {
				return posts.$remove(post);
			}
		};

		return Post;

	};

})();
