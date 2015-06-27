(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name cosBox.factory:Nerds
	 * @description
	 * # Nerds
	 * Factory of the cosBox
	 */
	angular
		.module('cosBox')
		.factory('Nerds', Nerds);

	/* @ngInject */
	function Nerds($http) {
		return {
		
			get: function() {
				return $http.get('/api/nerds');
			},

			create: function(nerdData) {
				return $http.post('/api/nerds', nerdData);
			},

			delete: function(id) {
				return $http.delete('/api/nerds/' +id);
			}
		};

	}

})();