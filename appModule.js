"use strict";

var mod = angular.module('app', ['ngRoute']);

/* controller */

angular.module('app').controller('appController', ['$scope', '$location', function ($scope, $location) {
    $scope.showFirst = function () {
        $location.url('/first');
    };

    $scope.showSecond = function () {
        $location.url('/second');
    };

    $scope.showThird = function () {
        $location.url('/third');
    };
}]);

/* routes  */

angular.module('app').config(['$routeProvider', function ($routeProvider) {

    var routes = [
        {
            url: '/first',
            config: {
                templateUrl: 'first.html',
                controller: 'appController'
            }
        },
        {
            url: '/second',
            config: {
                templateUrl: 'second.html',
                controller: 'appController'
            }
        },
        {
            url: '/third',
            config: {
                templateUrl: 'third.html',
                controller: 'appController'
            }
        }
    ];

    routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config)
    });

    $routeProvider.otherwise({ redirectTo: '/first', controller: 'appController' });
}]);