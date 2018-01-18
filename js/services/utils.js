angular.module('app')
.factory('utils', ['growl', '$location',
    function (growl, $location) {
        var obj = {};
        var status;

        return {
            getData: function (key) {
                return obj[key];
            },
            setData: function (key, value) {
            obj[key] = value;
            },
            // checkStatus: function() {
            //     if(!status) {
            //         $location.path('/')
            //     }
            // },
            // authStatus: function() {
            //     status = true
            // }
        }

        return {
            setData: setData,
            getData: getData,
            // checkStatus: checkStatus,
            // authStatus: authStatus
        }
    }
])