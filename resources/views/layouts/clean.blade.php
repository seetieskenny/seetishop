<!DOCTYPE html>
<html class="no-js"
    lang="{{ Session::get('locale') }}"
    xml:lang="{{ Session::get('locale') }}"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:og="http://ogp.me/ns#"
    xmlns:fb="https://www.facebook.com/2008/fbml">
<head>
    @include('partials.head')

    @yield('head')
</head>
<body>
    @section('content')

    @show

    @include('partials.foot')

    @yield('foot')
</body>
</html>
