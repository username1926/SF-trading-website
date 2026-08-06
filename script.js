

const nav = document.querySelector("nav");

const menuButton = document.createElement("button");

menuButton.innerHTML = "☰";

menuButton.classList.add("menu-btn");

document.querySelector("header").appendChild(menuButton);



menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});




const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},
{
    threshold:0.15
});



sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});




window.addEventListener("scroll",()=>{


    const header = document.querySelector("header");


    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }


});