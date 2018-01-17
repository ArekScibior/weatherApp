app.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'main-view/weather-template.html',
            controller: 'weatherCtrl'
        }).
        otherwise({
            templateUrl: 'main-view/weather-template.html',
            controller: 'weatherCtrl'
        })
}]);

app.config(['growlProvider', function (growlProvider) {
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalDisableCountDown(true);
}]);