<?php
ob_start();
session_start();

require 'connect.inc.php';

@$current_file = $_SERVER['SCRIPT_NAME'];
@$http_referer = $_SERVER['HTTP_REFERER'];

function loggedin() {
    if(isset($_SESSION['username']) && !empty($_SESSION['username'])){
        return TRUE;
    }  else {
        return FALSE;
    }
}

function getuser() {
	
	global $conn;
	
	if(loggedin())
	{
        $query = "SELECT * FROM `users` WHERE `username` = '".$_SESSION['username']."'";
	}
	else {
		$query = "SELECT * FROM `users` WHERE `username` = '".$conn->real_escape_string($_POST['username'])."'";
	}
        $result = $conn->query($query);
        if ($result->num_rows>0) {
                return $result->fetch_assoc();
            }
        }
    
?>
