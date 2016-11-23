<?php
session_start(); // start session using PHP
if( isset($_SESSION['uid']) ) print 'user authentified success'; //data condition check
?>