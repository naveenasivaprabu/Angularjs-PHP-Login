<?php
$user=json_decode(file_get_contents('php://input'));  //here all get user from data and check
if($user->mail=='admin' && $user->pass=='admin') //static data check here using PHP
    session_start(); // session start using PHP
    $_SESSION['uid']=uniqid('ang_'); // here set session uid
    print $_SESSION['uid']; // result response data
?>