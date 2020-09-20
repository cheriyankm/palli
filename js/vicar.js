var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http) {
    /*$scope.records = [];
    $http({
        method: 'GET',
        url: 'https://jsonbin.org/cheriyankmaman/vicars',
        headers: {
            'authorization': "token e46334f4-f702-413f-80d7-e255d156e5b0"
        }
    }).then(function(response) {
        $scope.records = response.data;
    });*/
    $scope.records = [];
    $http.get("https://dl.dropbox.com/s/6w4c7f69uthtrxq/vicar.csv?dl=0")
        .then(function(response) {
        $scope.csvRecord = response.data;
        var lines = $scope.csvRecord.split("\r\n");
            var result = [];
            var headers = lines[0].split(",");
            for (var i = 1; i < lines.length; i++) {
                var obj = {};
                var currentline = lines[i].split(",");
                for (var j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentline[j];
                }
                result.push(obj);
            }
        $scope.records = result;
    });
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});