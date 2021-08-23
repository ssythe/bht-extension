var href = window.location.href;
var url = new URL(href);

if (/\d/.test(href)) {
    
    var check_decline = url.searchParams.get('decline');

    if (check_decline !== null) {
        var buttons = document.getElementsByClassName('forum-button red');
        for (n = 0; n < buttons.length; n++) {
            if (buttons[n].value == 'decline') {
                buttons[n].click();
            } 
        }
    }

    var give = document.getElementsByClassName('trade-item-box')[0].getElementsByClassName('trade-item ellipsis');
    var receive = document.getElementsByClassName('trade-item-box')[1].getElementsByClassName('trade-item ellipsis');

    var sender = document.getElementsByClassName('trade-give-box')[1].parentNode.getElementsByTagName('a')[0].href.replace('https://www.brick-hill.com/user/','');

    var tradeLink = 'https://brick-hill.trade/trade/calculate/';
    var counterLink = 'https://www.brick-hill.com/trade/create/'+sender+'?click=';

    for(n = 0; n < give.length; n++){
        var link = give[n].getElementsByTagName('a')[0].href;
        tradeLink = tradeLink.concat(link.replace('https://www.brick-hill.com/shop/','')+'-');
        counterLink = counterLink.concat(link.replace('https://www.brick-hill.com/shop/','')+'-');
    }

    var tradeLink = tradeLink.substr(0,tradeLink.length-1)+'/';

    for(n = 0; n < receive.length; n++){
        var link = receive[n].getElementsByTagName('a')[0].href;
        tradeLink = tradeLink.concat(link.replace('https://www.brick-hill.com/shop/','')+'-');
        counterLink = counterLink.concat(link.replace('https://www.brick-hill.com/shop/','')+'-');
    }

    tradeLink = tradeLink.substr(0,tradeLink.length-1);
    counterLink = counterLink.substr(0,counterLink.length-1);

    // Counter button.

    var form = document.createElement('form');
    form.style = 'display:inline-block;margin-right:4px';

    var button = document.createElement('button');
    button.className = 'forum-button orange';
    button.innerHTML = 'COUNTER';
    button.type = 'button';

    var link = document.createElement('a');
    link.href = counterLink;
    link.target = '_blank';

    link.appendChild(button);
    form.appendChild(link);
    document.getElementsByClassName('content')[0].appendChild(form);

    // Calculate button.

    var form = document.createElement('form');
    form.style = 'display:inline-block;margin-right:4px';

    var button = document.createElement('button');
    button.className = 'forum-button blue';
    button.innerHTML = 'CALCULATE <i class="fa fa-external-link-alt"></i>';
    button.type = 'button';

    var link = document.createElement('a');
    link.href = tradeLink;
    link.target = '_blank';

    link.appendChild(button);
    form.appendChild(link);
    document.getElementsByClassName('content')[0].appendChild(form);

    // Ask button

    var form = document.createElement('form');
    form.style = 'display:inline-block;';

    var button = document.createElement('button');
    button.className = 'forum-button blue';
    button.innerHTML = 'ASK MARKETPLACE';
    button.type = 'button';

    var link = document.createElement('a');
    link.href = 'https://www.brick-hill.com/forum/3/create/#'+tradeLink;
    link.target = '_blank';

    link.appendChild(button);
    form.appendChild(link);
    document.getElementsByClassName('content')[0].appendChild(form);
    
} else {
    
    var trades = document.getElementsByClassName('tab-body active')[0].getElementsByClassName('clan-card');

    if (trades.length > 0) {

        for (n = 0; n < trades.length; n++) {

            var children = trades[n].childNodes;
            for (x = 0; x < children.length; x++) {

                if (children[x].href) {

                    if (children[x].href.includes('trades')) {
                        
                        var decline_button = document.createElement('a');
                        decline_button.style = "float: right";
                        decline_button.href = children[x].href+'?decline';
                        decline_button.innerHTML = '<button type="button" class="forum-button red">Decline</button>';
                        
                        var trade_data = trades[n].getElementsByClassName('data')[0];
                        
                        trade_data.insertBefore(decline_button, trade_data.children[0]);

                        break;
                    }

                }

            }

        }

    }
    
}