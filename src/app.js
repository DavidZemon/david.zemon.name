'use strict';

angular.module('davidzemon', [
        'davidzemon.welcome',
        'davidzemon.academia'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .otherwise({
                    redirectTo: '/welcome'
                })
        }]);
