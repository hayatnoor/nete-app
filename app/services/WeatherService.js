app.factory('WeatherService', ['$http', '$q',
	function ($http, $q) {

		var base_url = 'http://api.openweathermap.org/data/2.5/';
		var api_key = 'b87ef13e00bc9136960cd7c0541a91b3';
		var units = 'units=imperial';

		return {
			// this function will use angular $q to stagger the two requests..

			// first one is the current weather
			// second is the five day forecast

			getWeatherByZipCode: function(zipCode) {

				var currentWeather = $http.get(base_url + 'weather?zip='+zipCode+',us&'+units+'&appid='+api_key, {cache: false});
				var fiveDayForecast = $http.get(base_url + 'forecast/daily?zip='+zipCode+',us&'+units+ '&cnt=5' + '&appid='+api_key, {'cache': false});

				return $q.all([currentWeather, fiveDayForecast]).then(function(response) {
					return response;
				});
			}
		}
	}
]);
