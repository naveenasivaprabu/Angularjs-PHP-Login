'use strict';
var app = angular.module('ng4freeApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', { templateUrl: 'partials/login.html', controller: 'loginCtrl' });
    $routeProvider.when('/home', { templateUrl: 'partials/home.html', controller: 'homeCtrl' });
    $routeProvider.otherwise({ redirectTo: '/login' });
}]);

//app router and session check
app.run(function($rootScope, $location, loginService) {
    var routespermission = ['/home']; // check authentication or not
    $rootScope.$on('$routeChangeStart', function() { // one by one page check
        if (routespermission.indexOf($location.path()) != -1) {
            //in true set session condition check
            var connected = loginService.islogged();
            connected.then(function(msg) {
                //redirect login page
                if (!msg.data) $location.path('/login');
            });
        }
    });
});
