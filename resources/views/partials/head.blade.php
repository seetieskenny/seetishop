<title>
    @section('title')
        Seeties
    @show
</title>

@if (!App::environment('production'))
    <meta name="robots" content="noindex, nofollow">
@endif
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta property="fb:app_id" content="{{ env('FACEBOOK_APP_ID') }}" />
@yield('meta')

<link rel="shortcut icon" href="/favicon.ico">
<link rel="canonical" href="{{ URL::current() }}" />