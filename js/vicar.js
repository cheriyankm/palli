var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http) {
    $scope.records = [];
    //$http.get("https://dl.dropbox.com/s/6w4c7f69uthtrxq/vicar.csv?dl=0")
    $http({
        method: 'GET',
        url: 'https://api.jsonbin.io/b/5f3973264d9399103616010b',
        headers: {
            'secret-key': "$2b$10$ieSDk8idUN/GZmHJkTgF1OL3z6zirU7ks1Swd8wq8eXIJTW6M2gVK"
        }
    }).then(function(response) {
        $scope.records = response.data;
    });
});