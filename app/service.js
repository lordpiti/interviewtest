theApp.factory('mainInfo', function($http) { 

    var _getItems= function (cb) {

        $http.get('/items.json').then(function(response) {
        // you can do some processing here
            cb(response);
        })
        .catch(function (data, status) {
            cb();
        });
    };

    return {
        getItems: _getItems
    }

});

