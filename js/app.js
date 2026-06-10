/* ==========================================
   MOBILE MENU
========================================== */

const hamburger = document.querySelector(".hamburger");

const body = document.body;

/* Create Mobile Menu Dynamically */

const mobileMenu = document.createElement("div");

mobileMenu.classList.add("mobile-menu");

mobileMenu.innerHTML = `
<a href="#">Home</a>
<a href="#">Simulations</a>
<a href="#">Languages</a>
<a href="#">Community</a>
<a href="#">Pricing</a>
<button class="primary-btn">
Start Mission
</button>
`;

body.appendChild(mobileMenu);

hamburger.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});

/* Close Menu When Link Clicked */

document.querySelectorAll(".mobile-menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});

/* ==========================================
   CURSOR GLOW
========================================== */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background =
        "rgba(8,8,17,.88)";

        navbar.style.backdropFilter =
        "blur(30px)";

        navbar.style.border =
        "1px solid rgba(255,255,255,.12)";

    }

    else{

        navbar.style.background =
        "rgba(10,10,18,.65)";

    }

});

/* ==========================================
   ACTIVE LINK SYSTEM
========================================== */

const navLinks =
document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});

/* ==========================================
   SMOOTH BUTTON FEEDBACK
========================================== */

document.querySelectorAll("button")
.forEach(button => {

    button.addEventListener("mousedown", () => {

        button.style.transform =
        "scale(.96)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform =
        "";

    });

});

/* ==========================================
   PRELOADER REMOVE
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});