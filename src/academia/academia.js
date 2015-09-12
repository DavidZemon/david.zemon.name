'use strict';

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
        }])
    .controller('AcademiaCtrl', AcademiaCtrl);

function AcademiaCtrl($rootScope) {
    $rootScope.page = 'academia';
}
