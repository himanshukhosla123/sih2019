var app = angular.module('sih2019', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider, $locationProvider) {

   // $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/',{
            templateUrl: './home.html',
            controller: 'homeController'
        })
        .when('/why-us', {
            templateUrl: './why-us.html',
            controller: 'whyUsController'
        });
}]);
