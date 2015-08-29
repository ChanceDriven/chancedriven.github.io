"use strict";

var mod = angular.module('app', ['ngRoute']);

/* controller */

angular.module('app').controller('appController', ['$scope', '$location', function ($scope, $location) {
    $scope.showAbout = function () {
        $location.url('/about');
    };

    $scope.showPeople = function () {
        $location.url('/people');
    };

    $scope.showEvents = function () {
        $location.url('/events');
    };
}]);

/* routes  */

angular.module('app').config(['$routeProvider', function ($routeProvider) {

    var routes = [
        {
            url: '/about',
            config: {
                templateUrl: 'Templates/aboutus.html',
                controller: 'appController'
            }
        },
        {
            url: '/people',
            config: {
                templateUrl: 'Templates/people.html',
                controller: 'appController'
            }
        },
        {
            url: '/events',
            config: {
                templateUrl: 'Templates/events.html',
                controller: 'appController'
            }
        }
    ];

    routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config)
    });

    $routeProvider.otherwise({ redirectTo: '/about', controller: 'appController' });
}]);