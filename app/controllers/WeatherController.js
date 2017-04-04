app.controller('WeatherController', ['$scope', '$window', 'WeatherService', 'LocationService', function($scope, $window, WeatherService, LocationService) {

	// use built-in browser capability to retrieve latitude and longitude
	$window.navigator.geolocation.getCurrentPosition(function(pos){
		$scope.loading = true;

		var latitude = pos.coords.latitude;
		var longitude = pos.coords.longitude;


		LocationService.getZipCodeByGPSCoordinates(latitude, longitude).then(function(response) {
			$scope.zipCode = response.data.results[0].address_components[7].short_name;

			// get the weather with the zip code
			$scope.getWeather($scope.zipCode);
		});

	});


	// this function will go out and fetch the weather by the zip code provided
	$scope.getWeather = function (zipCode) {
		WeatherService.getWeatherByZipCode(zipCode).then(function (response) {

			// first response element is the current weather data
			$scope.currentWeatherData = response[0].data;

			// second response element is the 5 day forecast data
			$scope.forecastData = response[1].data;

		}).catch(function() {
			$scope.errorResponse = true;
		}).finally(function() {
			$scope.loading = false;
		});

	};

}]);