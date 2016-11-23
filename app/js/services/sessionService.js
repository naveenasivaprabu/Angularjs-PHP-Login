'use strict';
//init factory
app.factory('sessionService', ['$http', function($http){ // call a sessionService
    return{
        set:function(key,value){ // set data using js
            return sessionStorage.setItem(key,value); //return key with value
        },
        get:function(key){ // get data using js
            return sessionStorage.getItem(key); //return key
        },
        destroy:function(key){ // destroy data using js
            $http.post('data/destroy_session.php'); //send server side request
            return sessionStorage.removeItem(key); //return data (key)
        }
    };
}])