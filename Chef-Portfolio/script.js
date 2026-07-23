// =========================
// Smooth Navigation
// =========================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});

// =========================
// Fade In Animation
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".section,.card,.skills div,.gallery img").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// =========================
// Hero Parallax
// =========================

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero-image");

    if(hero){

        hero.style.transform=`translateY(${window.scrollY*0.25}px)`;

    }

});

// =========================
// Active Navigation
// =========================

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    document.querySelectorAll("nav a").forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// =========================
// Gallery Hover Shadow
// =========================

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.boxShadow="0 25px 50px rgba(0,0,0,.25)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.boxShadow="0 10px 25px rgba(0,0,0,.12)";

    });

});

// =========================
// Print Shortcut
// =========================

document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="p"){

        e.preventDefault();

        window.print();

    }

});

// =========================
// Console Message
// =========================

console.log("Chef Portfolio Loaded Successfully");