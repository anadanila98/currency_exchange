
/**
 * mainRoutes Module;
 *
 * Description
 */
var app = angular.module('mainRoutes', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/main', {
        controller: 'myCtrl',
        templateUrl: '../views/main.php'
    }).when('/about', {
        templateUrl: '../views/home/about.html'
    }).otherwise({
        redirectTo: '/'
    });
});
