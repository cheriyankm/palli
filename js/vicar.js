var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http) {
    $scope.records = [];
    $http.get("https://dl.dropbox.com/s/6w4c7f69uthtrxq/vicar.csv?dl=0")
        .then(function(response) {
        $scope.csvRecord = response.data;
        var lines = $scope.csvRecord.split("\n");
            var result = [];
            var headers = lines[0].split(",");
            for (var i = 1; i < lines.length; i++) {
                var obj = {};
                var currentline = lines[i].split(",");
                for (var j = 0; j < headers.length; j++) {
                    obj[headers[j].trim()] = currentline[j].trim();
                }
                result.push(obj);
            }
        $scope.records = result;
        console.log($scope.records);
    });
});