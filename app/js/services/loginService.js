'use strict';
app.factory('loginService',function($http, $location, sessionService){
    //javascript function return server side value
    return{
        //call differnt function(login,logout and islogged,etc..)
        login:function(data,scope){
            var $promise=$http.post('data/user.php',data); //send server side data to user.php
            $promise.then(function(msg){ //result store
                var uid=msg.data; // get only session id and set
                if(uid){
                    //console.log("get session id = "+ uid);
                    sessionService.set('uid',uid); //set uid in apps
                    $location.path('/home'); // with redirect Home page
                }
                else  {
                    //console.log("get session id = "+ uid);
                    scope.msgtxt='wrong incorrect information data';
                    $location.path('/login');// with redirect Home page
                }
            });
        },
        logout:function(){ // init and logout function call
            sessionService.destroy('uid'); // uniq session id destroy
            $location.path('/login'); //with redirect Login or index page
        },
        islogged:function(){ //every api check login or not
            var $checkSessionServer=$http.post('data/check_session.php');// send server side request
            return $checkSessionServer;

        }
    }

});