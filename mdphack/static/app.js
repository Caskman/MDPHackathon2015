// var app = angular.module('MDPHack2015',[]);
var app = angular.module('MDPHack2015', ['ngAnimate'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

setTimeout(function() {
    document.querySelector('#dino').style.opacity = 0.2;
    document.querySelector('#dino').style['left'] = "3000px";
    setTimeout(function() {
        document.querySelector('#dino').style.opacity = 0;
        document.querySelector('#dino').style['left'] = "000px";
        setTimeout(function() {
            document.querySelector('#dino').style.opacity = 0.2;
            document.querySelector('#dino').style['left'] = "3000px";
            setTimeout(function() {
                document.querySelector('#dino').style.opacity = 0;
                document.querySelector('#dino').style['left'] = "000px";
            }, 10000)
        }, 10000)
    }, 10000)
}, 10000);
