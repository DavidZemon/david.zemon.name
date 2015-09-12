'use strict';

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
        }])
    .controller('MapleCtrl', MapleCtrl);

function MapleCtrl($rootScope) {
    $rootScope.page = 'academia';
}
