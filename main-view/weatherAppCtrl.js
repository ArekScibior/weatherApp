app.controller("weatherCtrl", ["$uibModal", "$scope", "$http", "$timeout", "$routeParams", "$location","growl", "utils", "dataProvider",function($uibModal, $scope, $http, $timeout, $routeParams, $location, growl, utils, dataProvider) {
    $('body').css("background", "url('../img/Sky.jpg')")
    $('body').css("background-size", "cover")
    $scope.showResult = false;

    var goError = function() {
        $location.path('/error')
    }

    $scope.search = function(city){
        dataProvider.getResults(city).then(function success(response) {
            var icon = document.querySelector('.wi')
            $scope.showResult = true;
            //info about weather
            $scope.temp = response.data.current.temp_c
            $scope.wind = response.data.current.wind_kph
            $scope.pressure = response.data.current.pressure_mb
            $scope.cloud = response.data.current.cloud
            
            //info about city
            $scope.name = response.data.location.name
            $scope.country = response.data.location.country
            $scope.time = response.data.location.localtime
            
            if($scope.cloud <= 0 && $scope.cloud <= 15) {
                icon.className = ""
                icon.classList.add("wi")
                icon.classList.add("wi-day-sunny")
            } else if ($scope.cloud > 15 && $scope.cloud <= 30) {
                icon.className = ""
                icon.classList.add("wi")
                icon.classList.add("wi-day-cloudy")
            } else if ($scope.cloud > 30 && $scope.cloud <= 50) {
                icon.className = ""
                icon.classList.add("wi")
                icon.classList.add("wi-day-cloudy-windy")
            } else if ($scope.cloud > 50 && $scope.cloud <= 70) {
                icon.className = ""
                icon.classList.add("wi")
                icon.classList.add("wi-cloud")
            } else if ($scope.cloud > 70 && $scope.cloud <= 100) {
                icon.className = ""
                icon.classList.add("wi")
                icon.classList.add("wi-cloudy")
            }
        }, function error(response){
            goError();
        });
    }

    var growlAlert = function (alert) {
        var config = {};
        return growl.error(alert, config);
    };

    $scope.imgSrc;

    $scope.pic = false;
    $scope.showResult = false;
    $scope.showGeo = false;
    $scope.showAlert = false;
}])


app.directive('autoFocus', function($timeout) {
    return {
        restrict: 'AC',
        link: function(_scope, _element) {
            $timeout(function(){
            	window.focus()
                _element[0].focus();
            }, 0);
        }
    };
});