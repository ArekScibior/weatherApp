app.controller("weatherCtrl", ["$uibModal", "$scope", "$http", "$timeout", "$routeParams", "$location","growl",function($uibModal, $scope, $http, $timeout, $routeParams, $location, growl) {

    var temp = document.querySelector('.temp')
    var text = document.querySelector('.text')
    var icon = document.querySelector('.wi')
    $scope.search = function(){
        var url ="http://api.apixu.com/v1/current.json?key=7aeed42ae9eb4f47bc8185433170310&q=" + $scope.city;
        $http.get(url).then(function success(response) {
            console.log(response)
            text.innerHTML = "Gratulacje, udało się wyszukać podaną miejscowość!"
            text.style.color = "green";
            $scope.pic = true;
            $scope.showAlert = true;
            $scope.showGeo = false;
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
            $scope.pic = false;
            $scope.showGeo = true;
            $scope.showAlert = true;
            $scope.showResult = false;
            text.innerHTML = "Niestety nie znaleźliśmy podanej miejscowości... ";
            text.innerHTML += '<br>'
            text.innerHTML += 'Spróbuj ponownie lub skorzystaj z geolokalizacji.'
            text.style.color = "red";
            growlAlert('Niestety nie znaleźliśmy podanej miejscowości', 'danger')
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