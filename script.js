// =========================
// INTRO SCREEN
// =========================


const enterBtn = document.getElementById("enter");

const intro = document.querySelector(".intro");


enterBtn.addEventListener("click", () => {


    intro.style.opacity = "0";


    setTimeout(() => {

        intro.style.display = "none";

    },1200);


});





// =========================
// FALLING HEARTS
// =========================


const heartsContainer = document.querySelector(".hearts");


function createHeart(){


    const heart = document.createElement("div");


    heart.classList.add("heart");



    const size = Math.random() * 15 + 10;


    heart.style.width = size + "px";

    heart.style.height = size + "px";



    heart.style.left = Math.random() * 100 + "%";



    heart.style.animationDuration =

    Math.random() * 5 + 5 + "s";



    heart.style.animationDelay =

    Math.random() * 5 + "s";



    const colors = [

        "#ffb6d9",

        "#ffc8e6",

        "#a8dcff",

        "#ffffff"

    ];



    heart.style.background =

    colors[Math.floor(Math.random()*colors.length)];



    heartsContainer.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);


}



setInterval(createHeart,400);





// =========================
// SCROLL REVEAL
// =========================


const revealElements = document.querySelectorAll(

".glass-card, .memory-card, .quote-card, .final-card"

);



const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("visible");


        }


    });


},

{

    threshold:.2

}

);



revealElements.forEach(el=>{


    el.classList.add("reveal");


    observer.observe(el);


});
// =========================
// BACK TO TOP
// =========================


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", ()=>{


    if(window.scrollY > 500){


        topBtn.classList.add("active");


    }else{


        topBtn.classList.remove("active");


    }


});



topBtn.addEventListener("click", ()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});





// =========================
// MOUSE GLOW EFFECT
// =========================


const glow = document.createElement("div");


glow.classList.add("mouse-glow");


document.body.appendChild(glow);



document.addEventListener("mousemove",(e)=>{


    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";


});





// =========================
// PARALLAX SKY EFFECT
// =========================


const lights = document.querySelector(".lights");


window.addEventListener("scroll",()=>{


    let value = window.scrollY;


    lights.style.transform =

    `translateY(${value * 0.15}px)`;


});





// =========================
// SMOOTH BUTTON SCROLL
// =========================


const scrollBtn = document.querySelector(".scroll-btn");


if(scrollBtn){


scrollBtn.addEventListener("click",()=>{


    document.querySelector(".letter-section")

    .scrollIntoView({

        behavior:"smooth"

    });


});


}





// =========================
// RANDOM QUOTE
// =========================


const quotes = [


"Some people become memories, others become feelings.",


"Small moments can become the biggest memories.",


"Some hearts feel like home.",


"Every beautiful story starts with a simple moment."


];



const quoteElements = document.querySelectorAll(".quote");



quoteElements.forEach((element,index)=>{


    if(quotes[index]){


        element.innerHTML = quotes[index];


    }


});
// =========================
// TYPING EFFECT
// =========================


function typingEffect(element, text, speed = 80){


    let index = 0;


    element.innerHTML = "";


    function type(){


        if(index < text.length){


            element.innerHTML += text.charAt(index);


            index++;


            setTimeout(type, speed);


        }


    }


    type();


}



const heroText = document.querySelector(".hero p");


if(heroText){


    const text = heroText.innerHTML;


    typingEffect(heroText, text, 60);


}





// =========================
// CLICK SPARKLES
// =========================


document.addEventListener("click",(e)=>{


    const sparkle = document.createElement("span");


    sparkle.className = "sparkle";


    sparkle.style.left = e.clientX + "px";


    sparkle.style.top = e.clientY + "px";



    document.body.appendChild(sparkle);



    setTimeout(()=>{


        sparkle.remove();


    },1000);


});





// =========================
// PAGE LOAD EFFECT
// =========================


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});





// =========================
// PREVENT IMAGE DRAG
// =========================


document.querySelectorAll("img")

.forEach(img=>{


    img.addEventListener("dragstart",(e)=>{


        e.preventDefault();


    });


});





console.log(

"♡ Welcome to Zhorfa's little world ♡"

);
