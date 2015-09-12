'use strict';

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
        }])
    .controller('ChangelogCtrl', ChangelogCtrl);

function ChangelogCtrl($rootScope) {
    $rootScope.page = 'academia';
}
