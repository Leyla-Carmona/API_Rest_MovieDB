window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

home(); 

function home(){
    location.hash = '';
    hometrends();
    homeupcoming();
}

function details() {

}

function searchpage() {
    location.hash='search='+ movie.value;
    findmovie(movie.value);
}

function genders(){
    moviegender(id); 
}