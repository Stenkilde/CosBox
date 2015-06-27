var app = angular.module('cosBox', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');


	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'app/views/main.template.html',
			controller: 'MainController',
			controllerAs: 'main'
		})

});