/*=================================================
                MOBILE MENU
=================================================*/

const nav = document.querySelector("nav");
const menuButton = document.createElement("button");

menuButton.innerHTML = "☰";
menuButton.classList.add("menu-btn");

document.querySelector("header").appendChild(menuButton);

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuButton.classList.toggle("open");

    if (nav.classList.contains("active")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }

});

// Close menu when clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuButton.innerHTML = "☰";

    });

});


/*=================================================
                THEME TOGGLE
=================================================*/

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        themeButton.classList.add("rotate");

        setTimeout(() => {
            themeButton.classList.remove("rotate");
        }, 400);

        if (document.body.classList.contains("light-mode")) {

            themeButton.innerHTML = "☀";

        } else {

            themeButton.innerHTML = "☾";

        }

    });

}


/*=================================================
                HERO ENTRANCE
=================================================*/

window.addEventListener("load", () => {

    const heroTitle = document.querySelector(".hero h2");
    const heroText = document.querySelector(".hero p");
    const heroButton = document.querySelector(".hero a");

    if(heroTitle){

        heroTitle.animate([

            {
                opacity:0,
                transform:"translateY(80px)"
            },

            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],{

            duration:900,
            easing:"ease-out",
            fill:"forwards"

        });

    }

    if(heroText){

        heroText.animate([

            {
                opacity:0,
                transform:"translateY(60px)"
            },

            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],{

            duration:1000,
            delay:250,
            easing:"ease-out",
            fill:"forwards"

        });

    }

    if(heroButton){

        heroButton.animate([

            {
                opacity:0,
                transform:"scale(.8)"
            },

            {
                opacity:1,
                transform:"scale(1)"
            }

        ],{

            duration:700,
            delay:500,
            easing:"ease-out",
            fill:"forwards"

        });

    }

});


/*=================================================
                SCROLL PROGRESS BAR
=================================================*/

const progressBar = document.createElement("div");

progressBar.id = "progress-bar";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*=================================================
                HEADER EFFECT
=================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/*=================================================
                SMOOTH SCROLL
=================================================*/

document.querySelectorAll('nav a[href^="#"]').forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(link.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/*=================================================
            SCROLL REVEAL ANIMATION
=================================================*/

const revealItems = document.querySelectorAll(
`
section,
.service-card,
.project-card,
.stat-box,
.contact-box
`
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            entry.target.style.transitionDelay =
                entry.target.dataset.delay || "0ms";

        }

    });

},{
    threshold:0.15
});

revealItems.forEach((item,index)=>{

    item.classList.add("hidden");

    item.dataset.delay = `${index * 120}ms`;

    revealObserver.observe(item);

});


/*=================================================
            ANIMATED COUNTERS
=================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const speed = target / 120;

        const updateCounter = ()=>{

            current += speed;

            if(current < target){

                counter.innerText = Math.floor(current);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target + "+";

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


/*=================================================
                RIPPLE EFFECT
=================================================*/

document.querySelectorAll("button,.hero a,.contact-preview a")
.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left = e.clientX - rect.left + "px";
        ripple.style.top = e.clientY - rect.top + "px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*=================================================
                3D CARD TILT
=================================================*/

const cards = document.querySelectorAll(

`
.service-card,
.project-card,
.stat-box
`

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width)-0.5)*16;
        const rotateX = ((y / rect.height)-0.5)*-16;

        card.style.transform =

`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

`
perspective(900px)
rotateX(0deg)
rotateY(0deg)
translateY(0px)
`;

    });

});


/*=================================================
            FLOATING CARD ANIMATION
=================================================*/

cards.forEach((card,index)=>{

    card.animate([

        {
            transform:"translateY(0px)"
        },

        {
            transform:"translateY(-8px)"
        },

        {
            transform:"translateY(0px)"
        }

    ],{

        duration:3500 + (index*250),

        iterations:Infinity,

        easing:"ease-in-out"

    });

});
/*=================================================
            BACK TO TOP BUTTON
=================================================*/

const backToTop = document.createElement("button");

backToTop.id = "backToTop";
backToTop.innerHTML = "↑";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show-top");

    } else {

        backToTop.classList.remove("show-top");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/*=================================================
            FLOATING PARTICLES
=================================================*/

const hero = document.querySelector(".hero");

if(hero){

    for(let i = 0; i < 25; i++){

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration =
            5 + Math.random() * 6 + "s";

        hero.appendChild(particle);

    }

}


/*=================================================
            MOUSE GLOW EFFECT
=================================================*/

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", x + "px");
        card.style.setProperty("--mouse-y", y + "px");

    });

});


/*=================================================
            NAVBAR ANIMATION
=================================================*/

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.style.padding = "12px";
        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    }else{

        navbar.style.padding = "18px";
        navbar.style.boxShadow = "none";

    }

});


/*=================================================
            HERO PARALLAX
=================================================*/

window.addEventListener("scroll",()=>{

    if(hero){

        hero.style.backgroundPositionY =
            window.scrollY * 0.35 + "px";

    }

});


/*=================================================
            PERFORMANCE
=================================================*/

let ticking = false;

window.addEventListener("scroll",()=>{

    if(!ticking){

        window.requestAnimationFrame(()=>{

            ticking = false;

        });

        ticking = true;

    }

});


/*=================================================
            PAGE LOADED
=================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

    console.log("Animations Loaded Successfully");

});
gsap.from(".hero h2",{

    opacity:0,

    y:80,

    duration:1,

    ease:"power3.out"

});


gsap.from(".hero p",{

    opacity:0,

    y:50,

    duration:1,

    delay:.3,

    ease:"power3.out"

});


gsap.from(".hero a",{

    opacity:0,

    scale:.7,

    duration:.8,

    delay:.6

});