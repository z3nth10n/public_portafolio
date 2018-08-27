function getAction(el, action, fn) {
    $.get('api/api.php', { action: action, resources: 'https://raw.githubusercontent.com/z3nth10n/public_portafolio/master/json/resources.json' }, function(data) { fn(el, data); });
}

getAction('get-css', function(el, data) {
    el.append('<link>'+data+'</link>');
});

getAction('get-js', function(el, data) {
    el.append('<script>'+data+'</script>');
});