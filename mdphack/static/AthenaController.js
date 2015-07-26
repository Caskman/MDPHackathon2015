app.controller("AthenaController", ['$scope', 'MainService', '$q', '$timeout', function($scope, MainService, $q, $timeout) {

	$scope.imgs = [
		{id: 0, src: "button.png"},
		{id: 1, src: "buttontosurvey.png"}
	];

	$scope.Selections = {
		img: 0
	};

	$scope.incImg = function() {
		var val = $scope.Selections.img;
		$scope.Selections.img = (val + 1) % $scope.imgs.length;
	}


}]);