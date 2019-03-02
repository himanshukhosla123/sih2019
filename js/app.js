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
        })
        .when('/contact-us', {
            templateUrl: './contact-us.html',
            // controller: 'conUsController'
        })
        .when('/other-apps', {
            templateUrl: './other-apps.html',
             controller: 'otherAppsController'
        })
        .when('/other-services', {
            templateUrl: './other-services.html',
            // controller: 'whyUsController'
        })
        .when('/sync-ppt', {
            templateUrl: './sync-ppt.html',
            // controller: 'whyUsController'
        })
        .when('/testimonials', {
            templateUrl: './testimonials.html',
            // controller: 'whyUsController'
        })
        .when('/bonus', {
            templateUrl: './bonus.html',
            // controller: 'whyUsController'
        });
}]);
