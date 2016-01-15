<?php


// Home
Route::get('/', [
	'as' 	=> 'home',
	'uses' 	=> 'HomeController@index'
]);





// Required login pages
Route::group(['middleware' => ['auth']], function () 
{
    
    // Dashboard
	Route::get('dashboard', function() 
	{
		return 'zzz';
	});

});



// JS Test
Route::get('js-test', [
	'uses' 	=> 'TestController@js'
]);



// Auth Test
Route::post('login', [
	'as' 	=> 'post_login',
	'before' => 'csrf',
	'uses'	=> 'TestController@login'
]);

Route::get('logout', [
	'as' 	=> 'logout',
	'uses' 	=> 'TestController@logout'
]);


// Test
Route::get('setcookie', [
	'uses' 	=> 'TestController@createCookie'
]);


Route::get('getcookie', [
	'uses'	=> 'TestController@getCookie'
]);


Route::get('clearsession', [
	'as' 	=> 'test',
	'uses' 	=> 'TestController@clearSession'
]);


// All route let react-router handle
Route::get('/{page}', [
	'uses' 	=> 'HomeController@index'
])->where(['page' => '.*']);