app.factory('LocationService', ['$http',
	function ($http) {

		return {

			// this function uses a googleapi endpoint to retrieve address based data from latitude and longitude coordinates
			getZipCodeByGPSCoordinates: function(latitude, longitude) {
				return $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true').then(function(response) {
					return response;
				});
			}
		}
	}
]);
