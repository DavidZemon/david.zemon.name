'use strict';

angular.module('davidzemon', [
        'davidzemon.welcome',
        'davidzemon.academia',
        'davidzemon.resume',
        'davidzemon.cars'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .otherwise({
                    redirectTo: '/welcome'
                })
        }]);

angular.module('davidzemon.welcome', [
        'ngRoute'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/welcome', {
                    templateUrl: 'src/welcome/welcome.html',
                    controller: 'WelcomeCtrl',
                    controllerAs: 'welcome'
                })
        }]);

angular.module('davidzemon.resume', [
        'ngRoute'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/resume', {
                    templateUrl: 'src/resume/resume.html',
                    controller: 'ResumeCtrl',
                    controllerAs: 'resume'
                })
        }]);

angular.module('davidzemon.academia', [
        'ngRoute',
        'davidzemon.academia.gradesheet',
        'davidzemon.academia.maple'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/academia', {
                    templateUrl: 'src/academia/academia.html',
                    controller: 'AcademiaCtrl',
                    controllerAs: 'academia'
                })
        }]);

angular.module('davidzemon.academia.gradesheet', [
        'ngRoute',
        'davidzemon.academia.gradesheet.changelog'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/academia/gradesheet', {
                    templateUrl: 'src/academia/gradesheet/gradesheet.html',
                    controller: 'GradesheetCtrl',
                    controllerAs: 'gradesheet'
                })
        }]);

angular.module('davidzemon.academia.gradesheet.changelog', [
        'ngRoute'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/academia/gradesheet/changelog', {
                    templateUrl: 'src/academia/gradesheet/changelog/changelog.html',
                    controller: 'ChangelogCtrl',
                    controllerAs: 'changelog'
                })
        }]);

angular.module('davidzemon.academia.maple', [
        'ngRoute'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/academia/maple', {
                    templateUrl: 'src/academia/maple/maple.html',
                    controller: 'MapleCtrl',
                    controllerAs: 'maple'
                })
        }]);

angular.module('davidzemon.cars', [
        'ngRoute'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/cars', {
                    templateUrl: 'src/cars/cars.html',
                    controller: 'CarsCtrl',
                    controllerAs: 'cars'
                })
        }]);
