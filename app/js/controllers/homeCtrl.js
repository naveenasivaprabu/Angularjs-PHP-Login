'use strict';
//init homeCtrl controller with check data
app.controller('homeCtrl', ['$scope','loginService', function($scope,loginService){
    $scope.txt='Page Home'; // Page Name
    $scope.logout=function(){ // call function click to logout
        loginService.logout(); // all service destroy
    }
}])