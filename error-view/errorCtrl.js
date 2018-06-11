app.controller("errorCtrl", ["$uibModal", "$scope", "$http", "$timeout", "$routeParams", "$location","growl","utils",function($uibModal, $scope, $http, $timeout, $routeParams, $location, growl, utils) {
    $('body').css("background", "url('../img/storm1.jpeg')")
    $('body').css("background-size", "cover")
    $scope.goHome = function() {
        $location.path('/')
    }
}]);