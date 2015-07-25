app.service('MainService', ['$http', '$q', function ($http, $q) {
    var functions = {};
    var data = {}; // private data; only accessible by getter functions; can't be set

    functions.getLatestAppointments = function (callback) {
        return $http.get('/GetLatestAppointments/', {
            cache: false
        }).success(callback);
    }

    return functions;
}]);