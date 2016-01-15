<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Services\Api\Auth;

class TestController extends Controller
{
    public function createCookie(Request $request) 
    {

    	// create .seeties.me token Cookie
    	$token = 'JDJ5JDEwJFdDdGRLLlo4OWRCeDlMMTEyUTFtbXVPUDNBN3kxV1VNQ0NEdC9ORXp6WmtSRWkwOTd5WGwy';

    	$cookie = \Cookie::make('token', $token, 60, null, env('COOKIE_DOMAIN'));

    	$response = new Response('Hello world');
    	return $response->withCookie( $cookie );
    }

    public function getCookie(Request $request) 
    {
    	return 'done';
    	//return $request->cookie('token');
    }

    public function clearSession(Request $request) 
    {
    	session()->flush();
    	
    	return 'ok';	
    }


    public function login(Request $request, Auth $authModel) 
    {
	    $response = $authModel->loginWithId( $request->input() );

	    // Handle error
	    if (array_key_exists('error', $response)) {
	    	var_dump($response['message']);
	    	return;
	    }

	    $user = \Normalizer::user($response['data']);
	    $user['token'] = $response['data']['token'];
	    // Update session
	    \Utils::setLoginSession($user);

	    return redirect()
	    		->route('home')
	    		->withCookie('token', $user['token']);
    }

    public function logout(Request $request, Auth $authModel) 
    {
    	if (session()->has('user')) {
    		\Utils::setLogoutSession();
    		$response = $authModel->logout();
    	}

		$cookie = cookie()->forget('token');
    	return redirect()
    			->route('home')
    			->withCookie($cookie);
    }


    public function js(Request $request) {
    	return view('js');
    }
}
