<?php

namespace App\Services;

use App\Services\ApiException;

abstract class Api {

    protected $baseUrl;

    public function __construct() {
        if (empty($this->baseUrl)) {
            $this->baseUrl = env('API_URL');
        }
    }

    /**
     * GET - seeties API
     *
     * @param $url  - api url
     * @param $data - api parameters
     *
     * @return Response object
     */
    public function call($url, $data=[]) {

        $url = $this->baseUrl . "$url?" . http_build_query( $this->appendToken($data) );
        //dd($url);
        $crawler = $this->webCrawler($url);
        $response = json_decode($crawler['content'], true);
        
        if ($crawler['http_code'] !== 200) {
            throw new ApiException( $response['message'] );
        }

        return $response;
    }


    /**
     * POST - seeties API
     *
     * @param $url  - api url
     * @param $data - api parameters
     *
     * @return Response object
     */
    public function post($url, $data=[]) {

        $url = $this->baseUrl . "$url";
        $options = [
            CURLOPT_POST        => 1,
            CURLOPT_POSTFIELDS  => http_build_query( $this->appendToken($data) )
        ];
        //dd($url);

        $crawler = $this->webCrawler($url, $options);
        $response = json_decode($crawler['content'], true);

        if ($crawler['http_code'] !== 200) {
            throw new ApiException( $response['message'] );
        }

        return $response;
    }


    /**
     * CURL API crawling
     *
     * @param $url  - api url
     * @param $data - api parameters
     *
     * @return Response object
     */
    private function webCrawler($url, $options = []) {
        $options = $options + array(
            CURLOPT_RETURNTRANSFER => true, // return web page
            CURLOPT_HEADER => false, // don't return headers
            CURLOPT_FOLLOWLOCATION => true, // follow redirects
            CURLOPT_ENCODING => "", // handle all encodings
            CURLOPT_USERAGENT => "spider", // who am i
            CURLOPT_AUTOREFERER => true, // set referer on redirect
            CURLOPT_CONNECTTIMEOUT => 120, // timeout on connect
            CURLOPT_TIMEOUT => 120, // timeout on response
            CURLOPT_MAXREDIRS => 10, // stop after 10 redirects
            CURLOPT_SSL_VERIFYPEER => true, // enabled SSL Cert checks
        );

        $ch = curl_init($url);
        curl_setopt_array($ch, $options);
        $content = curl_exec($ch);
        $err = curl_errno($ch);
        $errmsg = curl_error($ch);
        $header = curl_getinfo($ch);
        curl_close($ch);

        $header['errno'] = $err;
        $header['errmsg'] = $errmsg;
        $header['content'] = $content;
        return $header;
    }


    /**
     * Append user token for all data
     */
    private function appendToken($data) {
        if (session()->has('user.token')) {
            $data['token'] = session()->get('user.token');
        }

        return $data;
    }

}

final class ApiException extends \Exception {

    public function __construct($message, $code = 0, \Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }

}
