app.controller("MainController", ['$scope', 'MainService', '$q', function($scope, MainService, $q) {

	$scope.latestAppointments = null;
	$scope.Selections = {
		Mode: 'APPOINTMENTS',
		selectedAppt: -1
	};

	$q.all([
		MainService.getLatestAppointments(function(appointments) {
			$scope.latestAppointments = appointments.data.reverse();
		})
	]).then(function() {


	});

	$scope.showEmail = function(appt) {
		$scope.Selections.selectedAppt = appt;
		$scope.Selections.Mode = 'EMAIL_PREVIEW';
	}

	$scope.showAppointments = function() {
		$scope.Selections.Mode = 'APPOINTMENTS';
	}

}]);