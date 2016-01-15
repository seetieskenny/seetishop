<?php

namespace App\Http\Middleware;

use Closure;
use App\Helpers\Utils;
use App\Services\Api\User;

class AutoLogin
{

    // Add ignored routes name here
    protected $ignoredRoutes = [
        'login',
        'logout'
    ];

    public function handle($request, Closure $next)
    {
        $currentRoute = $request->path();

        // Check for ignore routes
        if (in_array($currentRoute, $this->ignoredRoutes)) {
            return $next($request);
        }
        
        // Check case for auto login
        // 1. if cookie not exist, force user logout (sync with live)
        // 2. if session_ver is different, force reset session
        // 3. if no session, create new session from cookie
        $cookieToken = $request->cookie('token');

        if (!$cookieToken && session()->has('user')) {
            Utils::setLogoutSession();
        }
        else if ($cookieToken &&
                    (!session()->has('user') || session()->get('session_ver') !== env('SESSION_VERSION'))) {
            $userModel = new User;
            $user = $userModel->getUser('me', [
                'token'     => $cookieToken
            ]);

            // Update session
            $user['token'] = $cookieToken;
            Utils::setLoginSession($user);
        }

        return $next($request);
    }
}
