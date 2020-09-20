var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http) {
    $scope.loading =true;
    $scope.loading_message = "Loading..."
});