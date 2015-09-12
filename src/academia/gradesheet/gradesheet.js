'use strict';

angular.module('davidzemon.academia.gradesheet', [
        'ngRoute'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/academia/gradesheet', {
                    templateUrl: 'src/academia/gradesheet/gradesheet.html',
                    controller: 'GradesheetCtrl',
                    controllerAs: 'gradesheet'
                })
        }])
    .controller('GradesheetCtrl', GradesheetCtrl);

function GradesheetCtrl($rootScope) {
    $rootScope.page = 'academia';
}