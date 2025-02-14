const key = process.env.API_KEY;

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': key,
    }
});

trends();
upcoming();
genders();

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

const menu = document.getElementById("menu");
const btn = document.getElementById("menu-btn");

btn.addEventListener("click", () => {
    menu.classList.toggle("active"); // Alterna la clase "hidden"
});

async function trends(){
    const {data } = await api('trending/movie/day');
    const movies = data.results;
    const neC = document.createElement('div');  //Nec for New Card
    neC.id = "neC";         
    const title = document.createElement('h1');    
    title.id = "title";            
    title.innerText = 'TRENDING MOVIES';
    document.body.appendChild(title);
    document.querySelectorAll("mov").forEach(el => el.remove()); //Remove to avoid repeat the information         
    movies.slice(0,20).forEach(movie => {
        const crd = document.createElement('div') //Crd card element        
        const img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;
        img.alt = movie.title;
        img.id = 'mov'
        crd.id = 'crd'
        crd.appendChild(img);
        neC.appendChild(crd);  
        document.body.appendChild(neC);
    });
}

async function upcoming(){
    const {data} = await api('/movie/upcoming');
    const movies = data.results;
    const neC = document.createElement('div');  //Nec for New Card
    neC.id = "neC";         
    const title = document.createElement('h1');    
    title.id = "title";            
    title.innerText = 'UPCOMING MOVIES';
    document.body.appendChild(title);
    document.querySelectorAll("mov").forEach(el => el.remove()); //Remove to avoid repeat the information         
    movies.slice(0,10).forEach(movie => {
        const crd = document.createElement('div') //Crd card element        
        const img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;
        img.id = 'mov'
        crd.id = 'crd'
        crd.appendChild(img);
        neC.appendChild(crd);  
        document.body.appendChild(neC);
    });
}

async function genders(){
    const { data } = await api('genre/movie/list');

    const menu = data.genres;
    const nav = document.createElement('nav');
    const title = document.createElement('h1') 
    title.innerText = "Categories";
    title.id = 'categoriestitle';
    nav.appendChild(title);    
    nav.id = 'navmenu'
    document.getElementById("menu").appendChild(nav);    
    document.querySelectorAll("mov").forEach(el => el.remove()); //Remove to avoid repeat the information         
    menu.forEach(type => {0
        const crd = document.createElement('li') 
        crd.className = 'menu-item';
        crd.innerText = type.name;        
        document.getElementById("menu").appendChild(crd);
    });
}