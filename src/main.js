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
