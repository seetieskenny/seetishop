<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Services\Api\User;

class HomeController extends Controller {
    
    public function index(User $userModel) {

    	return view('js');

    	if (session()->has('user')) {
    		return session()->get('user');
    	}
    	else {
    		return view('home');
    	}
    }

}
