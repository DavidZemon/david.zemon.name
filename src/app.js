'use strict';

angular.module('davidzemon', [
        'davidzemon.welcome',
        'davidzemon.academia',
        'davidzemon.resume',
        'davidzemon.cars'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/welcome'})
    }]);

angular.module('davidzemon.welcome', [
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/welcome', {
            templateUrl: 'src/welcome/welcome.html'
        })
    }]);

angular.module('davidzemon.resume', [
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/resume', {
            templateUrl: 'src/resume/resume.html'
        })
    }]);

angular.module('davidzemon.academia', [
        'ngRoute',
        'davidzemon.academia.gradesheet',
        'davidzemon.academia.maple'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/academia', {
            templateUrl: 'src/academia/academia.html'
        })
    }]);

angular.module('davidzemon.academia.gradesheet', [
        'ngRoute',
        'davidzemon.academia.gradesheet.changelog'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/academia/gradesheet', {
            templateUrl: 'src/academia/gradesheet/gradesheet.html'
        })
    }]);

angular.module('davidzemon.academia.gradesheet.changelog', [
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/academia/gradesheet/changelog', {
            templateUrl: 'src/academia/gradesheet/changelog/changelog.html'
        })
    }]);

angular.module('davidzemon.academia.maple', [
        'ngRoute',
        'davidzemon.academia.maple.gettingStarted'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/academia/maple', {
            templateUrl: 'src/academia/maple/maple.html'
        })
    }]);

angular.module('davidzemon.academia.maple.gettingStarted', [
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/academia/maple/gettingStarted', {
            templateUrl: 'src/academia/maple/gettingStarted/gettingStarted.html'
        })
    }]);

angular.module('davidzemon.cars', [
        'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cars', {
            templateUrl: 'src/cars/cars.html'
        })
    }]);
