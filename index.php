<?php 
include_once('config.php');
include_once('header.php');

$request = $_SERVER['REQUEST_URI'];

switch ( $request ) {

	case ROOT_DIR:
		include 'views/home.php';
		break;
	case ROOT_DIR . 'portfolio':
		include 'views/coming_soon.php';
		break;
	case ROOT_DIR . 'resume':
		include 'views/coming_soon.php';
		break;
	default:
		include '404.html';
		break;

}

include_once('footer.php');
?>