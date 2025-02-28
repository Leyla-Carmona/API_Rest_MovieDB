const api = axios.create({
    baseURL: "/.netlify/functions/getMovies",
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
});

api.get("/")
    .then(response => console.log(response.data))
    .catch(error => console.error("Error:", error));

menugenders();

async function mode(){
    const mode = document.getElementById('mode');
    let body = document.body.className;
    if(body == "darkmode")
    {
        mode.innerText = 'Dark mode';
        document.body.className ="lightmode";
    } 
    else{
        mode.innerText = 'Light mode';
        document.body.className ="darkmode";
    }
}

async function hometrends(){  
    deletehomepage();  
    deletegenderspage();
    const {data } = await api.get('?path=trending/movie/day');
    const movies = data.results;    
    const neC = document.createElement('div');  //Nec for New Card    
    neC.id = "neC";        
    const title = document.createElement('h1');    
    title.id = "title";            
    title.className = "trends"
    title.innerText = 'TRENDING MOVIES';
    document.body.appendChild(title);    
    movies.slice(0,10).forEach(movie => {
        const crd = document.createElement('div') //Crd card element        
        const img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;
        img.alt = movie.title;
        img.id = 'mov'
        crd.id = 'crd'
        img.className = 'trends';
        crd.className = 'trends';
        neC.className = 'trends';
        crd.appendChild(img);
        neC.appendChild(crd);  
        document.body.appendChild(neC);
    });
}

async function homeupcoming(){    
    deletehomepage();  
    deletegenderspage(); 
    const {data} = await api.get('?path=movie/upcoming');
    const movies = data.results;
    const neC = document.createElement('div');  //Nec for New Card
    neC.id = "neC";       
//    document.querySelectorAll(".upcoming").forEach(el => el.remove()); //Remove to avoid repeat the information  
    const title = document.createElement('h1');    
    title.id = "title"; 
    title.className = "upcoming"           
    title.innerText = 'UPCOMING MOVIES';
    document.body.appendChild(title);
    movies.slice(0,10).forEach(movie => {
        const crd = document.createElement('div') //Crd card element        
        const img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;
        img.id = 'mov'
        crd.id = 'crd'
        img.className = 'upcoming';
        crd.className = 'upcoming';        
        neC.className = 'upcoming';
        crd.appendChild(img);
        neC.appendChild(crd);  
        document.body.appendChild(neC);
        //console.log(movie);
    });
}

async function details(id){ 
    const {data} = await api.get('?path=movie/'+ id);
    const movies = data.results;
    console.log(movies);
}

async function menugenders(){
    const { data } = await api.get('?path=genre/movie/list');
    const menu = data.genres;
    const nav = document.createElement('nav');
    const title = document.createElement('h1') 
    title.innerText = "Categories";
    title.id = 'categoriestitle';
    nav.appendChild(title);    
    nav.id = 'navmenu'
    document.getElementById("menu").appendChild(nav);    
    document.querySelectorAll("mov").forEach(el => el.remove());          
    menu.forEach(type => {0
        const crd = document.createElement('li') 
        crd.className = 'menu-item';
        crd.innerText = type.name;        
        document.getElementById("menu").appendChild(crd);
        crd.addEventListener('click', () => { 
            location.hash = '#category=' + type.id + '-' + type.name;
            moviegender(type.id, type.name);
        });
    });
}

async function moviegender(id, name){       
    deletehomepage();  
    deletegenderspage();
    const { data } = await api.get('?path=discover/movie?with_genres='+ id);
    const movies = data.results;
    const title = document.createElement('h1');    
    title.innerText = name;              
    title.id = "genders"
    const neC = document.createElement('div');  
    document.body.appendChild(title);    
    neC.id = "geC";       
    console.log(movies);
    movies.forEach(movie => {
        const grd = document.createElement('div') //Crd card element        
        const img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;
        img.alt = movie.title;
        img.id = 'mov'
        grd.id = 'grd'
        img.className = 'genders';
        grd.className = 'genders';
        neC.className = 'genders';
        grd.appendChild(img);
        neC.appendChild(grd);  
        document.body.appendChild(neC);
    });
}

async function findmovie(movie) {
    deletehomepage();  
    deletegenderspage();
    
    const { data } = await api.get('?path=search/movie?query=' + movie)
    const search = data.results;
    const title = document.createElement('h1');    
    title.innerText = name;              
    title.id = "genders"
    const neC = document.createElement('div');  
    document.body.appendChild(title);    
    neC.id = "geC";       
    search.forEach(movie => {
        const grd = document.createElement('div') //Crd card element        
        const img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;
        img.onerror = function() {            
            this.src = "https://img.freepik.com/foto-gratis/textura-cemento_1194-5269.jpg?t=st=1739922417~exp=1739926017~hmac=281ff04f3da32bf065b52ee3b3f387fe4fe7e35d0afc0df4ac16db92b89424b5&w=900";           
            const text = document.createElement('h1');
            text.innerText = movie.title;
            img.appendChild(text);
          }; 
        img.alt = movie.title;
        img.id = 'mov'
        grd.id = 'grd'
        img.className = 'genders';
        grd.className = 'genders';
        neC.className = 'genders';
        grd.appendChild(img);
        neC.appendChild(grd);  
        document.body.appendChild(neC);        
       // img.addEventListener('click', () => {
        details(movie.id);
    //});
        
    });
}

async function deletehomepage(){
    document.querySelectorAll(".trends").forEach(el => el.remove());  
    document.querySelectorAll(".upcoming").forEach(el => el.remove());   
}

async function deletegenderspage() {
    document.querySelectorAll("h1, .genders").forEach(el => el.remove());  
}

const menu = document.getElementById("menu");
const btn = document.getElementById("menu-btn");


btn.addEventListener("click", () => {
    menu.classList.toggle("active"); 
});
