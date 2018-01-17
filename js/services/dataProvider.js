angular.module('employeeApp')
.factory('dataProvider', ["$http",
    function dataProvider($http) {
    var url = 'http://api.apixu.com/v1/current.json?key=7aeed42ae9eb4f47bc8185433170310&q=Paris'
        return {
            getResults: function() {
                let promise = $http.get(url)
                return promise;
            }
        }
    }
]);
