// var app = angular.module('MDPHack2015',[]);
var app = angular.module('MDPHack2015', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

setTimeout(function() {
    document.querySelector('#dino').style.opacity = 1;
}, 15000);
