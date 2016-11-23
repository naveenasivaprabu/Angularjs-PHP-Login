'use strict';

app.controller('loginCtrl', ['$scope','loginService', function ($scope,loginService) { // call loginCtrl function
    $scope.msgtxt=''; //int message
    $scope.login=function(data){ // pass a login user information data
        loginService.login(data,$scope); //function call to login service data
    };
}]);