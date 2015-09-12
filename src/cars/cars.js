'use strict';

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
        }])
    .controller('CarsCtrl', CarsCtrl);

function CarsCtrl($rootScope) {
    $rootScope.page = 'cars';
}
