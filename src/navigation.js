window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){

if(location.hash.startsWith('#details')){
 details();
}else{
    home();
}
}

function home(){
    trends();
    upcoming();
}

function details() {
}

function searchpage() {
}