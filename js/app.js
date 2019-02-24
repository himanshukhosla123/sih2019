var app = angular.module('sih2019', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider, $locationProvider) {

   // $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/',{
            templateUrl: 'sih2019/home.html',
            controller: 'homeController'
        })
        .when('/why-us', {
            templateUrl: 'sih2019/why-us.html',
            controller: 'whyUsController'
        });
}]);
