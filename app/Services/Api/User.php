<?php 

namespace App\Services\Api;

use App\Services\Api;

class User extends Api {

	//protected $baseUrl = 'http://google.com';


	/**
	 * Get all Seeties users
	 *
	 * @param $param 	- search params
	 */
	public function getAll($params) {
		return;
	}


	/**
	 * Get users detail using user ID
	 *
	 * @param $id 		- user ID
	 * @param $params 	- extra params (eg, token)
	 */
	public function getUser($id, $params = []) {
		$api = "/$id";

		$resp = $this->call( $api, $params );
		return \Normalizer::user( $resp['data'] );
	}


	/**
	 * Get users detail using username
	 *
	 * @param $username  - username
	 * @param $params 	- extra params (eg, token)
	 */
	public function getUserByUsername($username, $params = []) {
		$api = "/user/$username";

		$resp = $this->call( $api, $params );
		return \Normalizer::user( $resp['data'] );
	}



	public function test() {
		return $this->call('system/languages');
	}

}