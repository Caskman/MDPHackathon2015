app.controller("MainController", ['$scope', 'MainService', '$q', function($scope, MainService, $q) {

	$scope.latestAppointments = null;

	$q.all([
		MainService.getLatestAppointments(function(latestAppointments) {
			$scope.latestAppointments = appointments.reverse();
		});
	]).then(function() {


	});

	$scope.sendFollowUp = function() {
		
	}

}]);