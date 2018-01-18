app.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'main-view/weather-template.html',
            controller: 'weatherCtrl'
        }).
        when('/error', {
            templateUrl: 'error-view/error-template.html',
            controller: 'errorCtrl'
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