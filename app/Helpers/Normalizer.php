<?php 

/**
 * Normalizer class
 * - create your normalize method here 
 */

namespace App\Helpers;

class Normalizer {

	/**
	 * Normalize user data
	 *
	 * @param $data 	- user object
	 */
	public static function user($data = []) { 
		//var_dump($data);
		$return = [
			'id' 		=> $data['uid'],
			'username'  => $data['username'],
			'name'		=> $data['name'],
			'email'		=> $data['email'],
			'sys_locale' => self::locale( $data['system_language'] ),
			'role' 		=> $data['role'],
			'country' 	=> $data['country'],
		];

		return $return;
	}


	/**
	 * Normalize language data
	 */
	public static function locale($data = []) {
		return [
			'id' 	=> $data['id'],
			'code' 	=> $data['language_code']
		];
	}

}