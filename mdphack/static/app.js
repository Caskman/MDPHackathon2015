// var app = angular.module('MDPHack2015',[]);
var app = angular.module('MDPHack2015', ['ngAnimate'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});



