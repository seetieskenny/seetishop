<?php 

/**
 * Utility helper class
 * - create your common helper method here 
 */

namespace App\Helpers;

class Utils {

	/**
	 * Update user session after login
	 *
	 * @param $field 	- session name
	 * @param $val 		- session val
	 */
	public static function setLoginSession($data) {
		session()->put('session_ver', env('SESSION_VERSION'));
        session()->put('user', $data);
	}


	/**
	 * Update user session after logout
	 */
	public static function setLogoutSession() {
		session()->forget('user');
	}

}