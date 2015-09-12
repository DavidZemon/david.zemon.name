'use strict';

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
        }])
    .controller('ResumeCtrl', ResumeCtrl);

function ResumeCtrl($rootScope) {
    $rootScope.page = 'resume';
}
