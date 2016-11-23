<?php
session_id('uid'); //uid set
session_start();  // start session
session_destroy(); //destroy session using php
session_commit();  // save data
?>