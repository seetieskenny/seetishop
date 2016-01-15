@include('partials.stats')

<script type="text/javascript">
var App = {
    apiUrl: "{{ env('API_URL') }}",
    user: {!! json_encode(session()->get('user')) !!}
};
</script>
