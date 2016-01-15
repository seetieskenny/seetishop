<!DOCTYPE html>
<html class="no-js"
    lang="{{ Session::get('locale') }}"
    xml:lang="{{ Session::get('locale') }}"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:og="http://ogp.me/ns#"
    xmlns:fb="https://www.facebook.com/2008/fbml">
<head>
    @include('partials.head')

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" />
	<link rel="stylesheet" href="/css/app.css" />
    @yield('head')
</head>
<body>
    <div id="App">
        @section('content')

        @show
    </div>

    @include('partials.foot')

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="/js/vendor.js"></script>
    <script src="/js/app.js"></script>
    @yield('foot')
</body>
</html>
