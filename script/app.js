class Interfaz{

    agregarHtml(h1, p, img){
        h1Old.innerText = h1;
        pOld.innerHTML = p;
        imgOld.style.backgroundImage = `url(${img})`;
    }
}

//document IDs
const h1Old = document.getElementById("h1-change");
const pOld = document.getElementById("p-change");
const imgOld = document.getElementById("hero-image-text");
const burguer = document.getElementById("hamburguer");
const black = document.querySelector(".black");
const close = document.getElementById("x");

//event listener
document.addEventListener("click", change);
burguer.addEventListener("click", burguerMenu);
close.addEventListener("click", cerrarBurger);

// new Interfaz
const ui = new Interfaz;

//info html
const objects = [
    {
        "h1" : "Discover innovative ways to decorate",
        "p" : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        "img" : "/images/desktop-image-hero-1.jpg",
        "mobile":"/images/mobile-image-hero-1.jpg"
    },
    {
        "h1":"We are available all across the globe",
        "p" : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        "img" : "/images/desktop-image-hero-2.jpg",
        "mobile":"/images/mobile-image-hero-2.jpg"
    },
    {
        "h1":"Manufactured with the best materials",
        "p": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        "img" : "/images/desktop-image-hero-3.jpg",
        "mobile":"/images/mobile-image-hero-3.jpg"
    }
];

//carrusel
let number = 0;


function change(e){
    e.preventDefault();
    
    if(e.target.classList[0] === "arrow-img" && e.target.classList[1] === "left" ){
        number = number - 1;
        if(number < 0){
            number = 2;
            if(window.screen.width <= 750){
                ui.agregarHtml(objects[number].h1, objects[number].p, objects[number].mobile);
            }else{
                ui.agregarHtml(objects[number].h1, objects[number].p, objects[number].img);
            }
        }else{
            if(window.screen.width <= 750){
                ui.agregarHtml(objects[number].h1, objects[number].p, objects[number].mobile);
            }else{
                ui.agregarHtml(objects[number].h1, objects[number].p, objects[number].img);
            }        
        }
    }
    else if(e.target.classList[0] === "arrow-img" && e.target.classList[1] === "right" ){
        number = number + 1;
        if(number >= 3){
            number = 0;
            if(window.screen.width <= 750){
                ui.agregarHtml(objects[number].h1, objects[number].p, objects[number].mobile);
            }else{
                ui.agregarHtml(objects[number].h1, objects[number].p, objects[number].img);
            }     
        }else{
            if(window.screen.width <= 750){
                ui.agregarHtml(objects[number].h1, objects[number].p, objects[number].mobile);
            }else{
                ui.agregarHtml(objects[number].h1, objects[number].p, objects[number].img);
            }     
        };

    };
}

function burguerMenu(e){
    e.preventDefault;

    black.style.display = "block";

}

function cerrarBurger(e){
    e.preventDefault;

    black.style.display = "none";
}