// var app = angular.module('MDPHack2015',[]);
var app = angular.module('MDPHack2015', ['ngAnimate'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

setTimeout(function() {
    document.querySelector('#dino').style.opacity = 1;
    document.querySelector('#dino').style.width = "10000px";
}, 35000);
