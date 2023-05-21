<?php 

require_once('vendor/autoload.php');

$router = new AltoRouter();
$router->setBasePath('/cinetech');

$router->map('GET', '/', function () {
    echo"<h1>page d'accueil</h1>";
	require_once("src/View/home.php");
}, 'home');

$router->map('GET', '/movies', function () {
    echo"<h1>page films</h1>";
	require_once("src/View/movies.php");
}, 'movies');

$router->map('GET', '/series', function () {
    echo"<h1>page series</h1>";
	require_once("src/View/series.php");
}, 'series');

$router->map('GET', '/detail', function () {
    echo"<h1>page detail</h1>";
	require_once("src/View/detail.php");
}, 'detail');



$match = $router->match();

// call closure or throw 404 status
if( is_array($match) && is_callable( $match['target'] ) ) {
	call_user_func_array( $match['target'], $match['params'] ); 
} else {
	// no route was matched
	header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}

?>