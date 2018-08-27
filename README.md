# How to use this

First, in your main js file put this:

```
var apiUrl;

$(document).ready(function () {
    apiUrl = "http://"+getRootUrl()+"api/actions.php";
    
    getActionData(el, { action: 'get-data', url: 'https://raw.githubusercontent.com/z3nth10n/public_portafolio/master/js/api.js' }, function(html, elx) {
        eval(html);
    });
});

function getActionData(el, data, fn) 
{
    $.ajax({
        method: "GET",
        url: 'api/actions.php',
        data: data,
        success: function(data) {
            fn(data, el);
        }
    });
}

```

And, copy api folder.

That's all folks!