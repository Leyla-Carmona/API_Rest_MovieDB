window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){

}

function home(){
    location.hash = '';
    hometrends();
    homeupcoming();
}

function details() {

}

function searchpage(data) {
    location.hash='#search='+ data;
}

function genders(){
    moviegender(id); 
}