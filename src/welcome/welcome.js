'use strict';

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
        }])
    .controller('WelcomeCtrl', WelcomeCtrl);

function WelcomeCtrl($rootScope) {
    $rootScope.page = 'welcome';
}
