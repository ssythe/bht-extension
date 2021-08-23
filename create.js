var href = window.location.href
var url = new URL(href);
var click = url.searchParams.get("click");

if(click !== null){
    var c = click.split('-');
    for(n = 0; n < c.length; n++){
        if(document.getElementById(c[n]) !== null){
            document.getElementById(c[n]).click();
        }
    }
}