<?php 

namespace App\Services\Api;

use App\Services\Api;

class Auth extends Api {


	/**
	 * Login using email/username
	 *
	 * @param $param 	- login data
	 */
	public function loginWithId($params) {
		$api = '/login';

		$response = $this->post($api, [
			'login_id' 		=> $params['username'],
			'password' 		=> $params['password'],
			'device_type'	=> 9
		]);

		return $response;
	}


	/**
	 * Logout
	 */
	public function logout() {
		$api = '/logout';

		$response = $this->call($api);

		return $response;
	}	

}