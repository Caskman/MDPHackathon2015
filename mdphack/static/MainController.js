app.controller("MainController", ['$scope', 'MainService', '$q', '$timeout', function($scope, MainService, $q, $timeout) {

	$scope.latestAppointments = null;
	$scope.Selections = {
		Mode: 'APPOINTMENTS',
		selectedAppt: -1
	};
	$scope.sendingEmail = false;
	$scope.emailSent = false;

	$q.all([
		MainService.getLatestAppointments(function(appointments) {
			$scope.latestAppointments = appointments.data.reverse();
		})
	]).then(function() {
		
	});

	$scope.showEmail = function(appt) {
		$scope.Selections.selectedAppt = appt;
		$scope.Selections.Mode = 'EMAIL_PREVIEW';
		$scope.emailSent = false;
		$scope.sendingEmail = false;
		$('.succesIcon polyline').css("");
	}

	$scope.showAppointments = function() {
		$scope.Selections.Mode = 'APPOINTMENTS';
	}

	$scope.sendEmail = function(appt) {
		if (!$scope.sendingEmail) {
			$scope.sendingEmail = true;
			$timeout(function() {
				$scope.sendingEmail = false;
				$scope.emailSent = true;
				$('.succesIcon polyline').show().css('-webkit-animation-play-state', 'running').delay(1000);
			}, Math.random() * (5000) + 2000);
		}
	}

}]);