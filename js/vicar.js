var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http) {
    $scope.records = [];
    $http({
        method: 'GET',
        url: 'https://jsonbin.org/cheriyankmaman/vicars',
        headers: {
            'authorization': "token e46334f4-f702-413f-80d7-e255d156e5b0"
        }
    }).then(function(response) {
        $scope.records = response.data;
    });
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});