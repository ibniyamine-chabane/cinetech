<?php 

require_once('vendor/autoload.php');

$router = new AltoRouter();
$router->setBasePath('/cinetech');

$router->map('GET', '/', function () {
    echo"<h1>page d'accueil</h1>";
	require_once("src/View/home.php");
}, 'home');

$match = $router->match();

// call closure or throw 404 status
if( is_array($match) && is_callable( $match['target'] ) ) {
	call_user_func_array( $match['target'], $match['params'] ); 
} else {
	// no route was matched
	header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}

?>