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
	function Post($firebaseArray, $firebaseObject, API_URL) {

		var ref = new Firebase(API_URL);
		var posts = $firebaseArray(ref.child('posts'));

		var Post = {
			all: posts,
			create: function(post) {
				return posts.$add(post);
			},
			get: function(postId) {
				return $firebaseObject(ref.child('posts').child(postId))
			},
			delete: function(post) {
				return posts.$remove(post);
			}
		};
		return Post;
	}

})();
