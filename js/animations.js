/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
document.querySelectorAll(
"section, .feature-card, .mission-card, .price-card"
);

function revealOnScroll(){

    revealElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        const trigger =
        window.innerHeight * 0.85;

        if(top < trigger){

            el.classList.add("active");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ==========================================
   AUTO ADD REVEAL CLASS
========================================== */

document.querySelectorAll(
".feature-card,.mission-card,.price-card"
).forEach(card => {

    card.classList.add("reveal");

});

/* ==========================================
   PARALLAX HERO
========================================== */

const hero =
document.querySelector(".hero");

document.addEventListener(
"mousemove",
e => {

    const x =
    (window.innerWidth / 2 - e.clientX) / 40;

    const y =
    (window.innerHeight / 2 - e.clientY) / 40;

    document
    .querySelectorAll(".floating-card")
    .forEach(card => {

        card.style.transform =
        `translate(${x}px,${y}px)`;

    });

});

/* ==========================================
   FEATURE CARD TILT
========================================== */

document
.querySelectorAll(
".feature-card,.mission-card"
)
.forEach(card => {

    card.addEventListener(
    "mousemove",
    e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width) - .5) * 12;

        const rotateX =
        ((y / rect.height) - .5) * -12;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener(
    "mouseleave",
    () => {

        card.style.transform = "";

    });

});

/* ==========================================
   NUMBER COUNTERS
========================================== */

function animateCounter(
element,
target
){

    let count = 0;

    const speed = target / 100;

    const update = () => {

        count += speed;

        if(count < target){

            element.innerText =
            Math.floor(count);

            requestAnimationFrame(update);

        }

        else{

            element.innerText =
            target;

        }

    };

    update();

}

/* Example Usage */

document
.querySelectorAll("[data-count]")
.forEach(counter => {

    const target =
    parseInt(
    counter.dataset.count
    );

    animateCounter(
    counter,
    target
    );

});