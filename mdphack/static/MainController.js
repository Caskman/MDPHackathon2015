app.controller("MainController", ['$scope', 'MainService', '$q', function($scope, MainService, $q) {

	$scope.latestAppointments = null;
	$scope.Selections = {
		selectedAppt: -1
	};

	$q.all([
		MainService.getLatestAppointments(function(appointments) {
			$scope.latestAppointments = appointments.data.reverse();
		})
	]).then(function() {


	});

	$scope.showEmail = function(id) {
		$scope.Selections.selectedAppt = (id == $scope.Selections.selectedAppt ) ? -1 : id ;
	}

}]);