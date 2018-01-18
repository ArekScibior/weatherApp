angular.module('app')
.factory('dataProvider', ["$http", "utils",
    function dataProvider($http, utils) {
        var url ="https://api.apixu.com/v1/current.json?key=7aeed42ae9eb4f47bc8185433170310&q=";
        return {
            getResults: function(city) {
                let promise = $http.get(url + city)
                return promise;
            }
        }
    }
]);
