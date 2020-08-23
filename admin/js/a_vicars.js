var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http) {
    $scope.errorMessage="";
    $scope.records = [];
    $scope.vicar = {};
    $scope.years = [];
    var year = 1930;
    $scope.editIndex = -11;
    $scope.file = null;
    for (var i = 1; i < 100; i++) {
        $scope.years.push(year + i);
    }
    
    $http({
        method: 'GET',
        url: 'https://jsonbin.org/cheriyankmaman/vicars',
        headers: {
            'authorization': "token e46334f4-f702-413f-80d7-e255d156e5b0"
        }
    }).then(function(response) {
        $scope.records = response.data;
    });
    
    $scope.edit = function(index, vicar){
        $scope.editIndex = index;
        $scope.vicar = vicar;
    }
    
    $scope.add = function(vicar){
        $scope.vicar = vicar;
        if($scope.vicar.name === undefined || $scope.vicar.name === ""){
            $scope.errorMessage = "Please specify vicar's name";
        } else if($scope.vicar.startYear === undefined || $scope.vicar.startYear === ""){
            $scope.errorMessage = "Please specify start year";
        } else if($scope.vicar.endYear === undefined || $scope.vicar.endYear === ""){
            $scope.errorMessage = "Please specify end year";
        } else if($scope.vicar.description === undefined || $scope.vicar.description === ""){
            $scope.errorMessage = "Please specify description";
        } else if($scope.vicar.photo === undefined || $scope.vicar.photo === ""){
            $scope.errorMessage = "Please specify photo name";
        } else{
            $scope.errorMessage = "";
            var url = 'https://jsonbin.org/cheriyankmaman/vicars';
            if($scope.editIndex != -11){
                url = url + "/" + $scope.editIndex
            }
            $http({
                method: 'PATCH',
                url: url,
                data: $scope.vicar,
                headers: {
                    'authorization': "token e46334f4-f702-413f-80d7-e255d156e5b0"
                }
            }).then(function(response) {
                $scope.errorMessage = "Added "+$scope.vicar.name+" achan's details";
                if($scope.editIndex === -11){
                    $scope.records.push($scope.vicar);
                }
                $scope.editIndex = -11;
                $scope.vicar = {};
            });
        }
    }
    
    $scope.delete = function(index, vicar){
        $scope.errorMessage = "";
        $scope.deletedVicar = vicar;
        $http({
            method: 'DELETE',
            url: 'https://jsonbin.org/cheriyankmaman/vicars/'+index,
            headers: {
                'authorization': "token e46334f4-f702-413f-80d7-e255d156e5b0"
            }
        }).then(function(response) {
            $scope.errorMessage = "deleted "+$scope.deletedVicar.name+" achan's details";
            $scope.records.splice(index, 1);
        });
    }
});