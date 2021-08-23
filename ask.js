var url = window.location.hash.replace('#','');
    
if(url.length > 0){
    document.getElementsByName('title')[0].value = 'Accept/decline?';
    document.getElementsByName('body')[0].innerHTML = 'View: '+url+'\n\nAccept or decline?\n\n*Posted with https://brick-hill.trade/chrome *';
}