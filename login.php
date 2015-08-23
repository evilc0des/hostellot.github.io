<?php
//Output will be in xml
header('Content-Type: text/xml');

$status = 'OK';

require 'core.inc.php';
require 'connect.inc.php';
if(isset($_GET['checkLogin'])){
	if(loggedin())
	{
		$status = 'LOGGED_IN';
		$user=getuser();
	}
	else {
		$status = 'LOGGED_OUT';
	}
	
}		
if(isset($_POST['username'])&&isset($_POST['password'])){
	$username = $_POST['username'];
	$password = $_POST['password'];
	$remember = isset($_POST['remember']);
	

	//$password_hash = md5($password);password_hash($password, PASSWORD_DEFAULT)
	if(!empty($username)&&!empty($password)){
		$query = "SELECT * FROM users WHERE username = '".$conn->real_escape_string($username)."'";
		$result = $conn->query($query);


		if($result->num_rows==0){
			$status = 'INVALID';
		}elseif ($result->num_rows>0) {
			$row = $result->fetch_assoc();
			if($row){
				$password_hash= $row['password'];
				if(password_verify($password,$password_hash))
				{
					if($remember){
						$_SESSION['username']=$row['username'];
					}
					$user=getuser();
					$status = 'LOGGED_IN';
					
				}
				else {
					$status = 'FAILED';
				}
			}

		}
	}

		else {
			$status = 'BLANK';
		}
	 
}

// create the new XML document
$dom = new DOMDocument();
// create the root <response> element
$response = $dom->createElement('response');
$dom->appendChild($response);

$stat = $dom->createElement('status');
$statText = $dom->createTextNode($status);
$stat->appendChild($statText);
$response->appendChild($stat);

if($status==='LOGGED_IN'){
$fname = $dom->createElement('firstname');
$fnameText = $dom->createTextNode($user['firstname']);
$fname->appendChild($fnameText);

$lname = $dom->createElement('lastname');
$lnameText = $dom->createTextNode($user['lastname']);
$lname->appendChild($lnameText);

$users = $dom->createElement('user');
$users->appendChild($fname);
$users->appendChild($lname);

$response->appendChild($users);
}

$xmlString = $dom->saveXML();

echo $xmlString;


?>