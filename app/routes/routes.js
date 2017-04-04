app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(false);
	$locationProvider.hashPrefix('');

	$routeProvider
		.when('/', {
			templateUrl : 'app/views/home.html',
			controller: 'WeatherController'
		})
		.otherwise({redirectTo:'/home'});


});