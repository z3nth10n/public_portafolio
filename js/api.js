function _getAction(el, action, fn) {
    $.get(apiUrl, { action: action, resources: 'https://raw.githubusercontent.com/z3nth10n/public_portafolio/master/json/resources.json' }, function(data) { fn(el, data); });
}

_getAction($("section[data-action='getportafolio']"), 'get-css', function(el, data) {
    console.log('CSS Data: '+data);
    el.append('<style>'+data+'</style>');
});

_getAction(null, 'get-js', function(el, data) {
    console.log('JS Data: '+data);
    eval(data);
});