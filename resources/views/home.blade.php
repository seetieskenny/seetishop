@extends('layouts.master')

@section('content')
    <div class="container">
        <h1>Login</h1>
        {{ Form::open(array('route' => 'post_login')) }}
            <div class="input-group">
                {{ Form::label('username', 'Username') }}
                {{ Form::text('username', null, ['class' => 'form-control']) }}
            </div>
            <div class="input-group">
                {{ Form::label('password', 'Password') }}
                {{ Form::password('password', ['class' => 'form-control']) }}
            </div>
            <div class="input-group">
                {{ Form::submit('Let me in!', ['class' => 'btn btn-info']) }}
            </div>
        {{ Form::close() }}
    </div>
@stop

@section('foot')
    
@stop
