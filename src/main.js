trends();
upcoming();
genders();

async function mode(){
    let body = document.body.className;
    if(body == "darkmode")
    {
        document.body.className ="lightmode";
    } 
    else{
        document.body.className ="darkmode";
    }
}

const menu = document.getElementById("menu");
const btn = document.getElementById("menu-btn");

btn.addEventListener("click", () => {
    menu.classList.toggle("active"); // Alterna la clase "hidden"
});

async function trends(){
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + key );
    const data = await res.json();
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
    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key='+ key) 
    const data = await res.json();
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
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + key );
    const data = await res.json();
    const menu = data.genres;
    const title = document.createElement('h2') 
    title.innerText = "Categories"
    document.getElementById("menu").appendChild(title);    
    title.className = 'menu-item';
    document.querySelectorAll("mov").forEach(el => el.remove()); //Remove to avoid repeat the information         
    menu.forEach(type => {
        const crd = document.createElement('li') 
        crd.className = 'menu-item';
        crd.innerText = type.name;
        document.getElementById("menu").appendChild(crd);
    });
}