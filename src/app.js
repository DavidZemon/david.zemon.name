'use strict';

angular.module('davidzemon', [
        'davidzemon.welcome',
        'davidzemon.academia',
        'davidzemon.resume'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .otherwise({
                    redirectTo: '/welcome'
                })
        }]);
