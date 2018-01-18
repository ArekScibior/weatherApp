app.controller("errorCtrl", ["$uibModal", "$scope", "$http", "$timeout", "$routeParams", "$location","growl","utils",function($uibModal, $scope, $http, $timeout, $routeParams, $location, growl, utils) {
    
    $scope.goHome = function() {
        $location.path('/')
    }
}]);