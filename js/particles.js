/* ==========================================
   LTC FLOATING LANGUAGE PARTICLES
========================================== */

const canvas =
document.createElement("canvas");

document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "0";

const ctx =
canvas.getContext("2d");

let width;
let height;

function resize(){

    width =
    canvas.width =
    window.innerWidth;

    height =
    canvas.height =
    window.innerHeight;

}

resize();

window.addEventListener(
"resize",
resize
);

/* ==========================================
   PARTICLE WORDS
========================================== */

const symbols = [

"न",
"अ",
"म",
"த",
"క",
"પ",
"ಕ",
"গ",
"ਲ",
"ॐ"

];

const particles = [];

for(let i=0;i<40;i++){

    particles.push({

        x:
        Math.random()*width,

        y:
        Math.random()*height,

        size:
        14 + Math.random()*18,

        speed:
        .2 + Math.random(),

        symbol:
        symbols[
        Math.floor(
        Math.random()*
        symbols.length
        )
        ],

        opacity:
        .05 +
        Math.random()*.12

    });

}

/* ==========================================
   DRAW LOOP
========================================== */

function animate(){

    ctx.clearRect(
    0,
    0,
    width,
    height
    );

    particles.forEach(p => {

        ctx.font =
        `${p.size}px Inter`;

        ctx.fillStyle =
        `rgba(255,255,255,${p.opacity})`;

        ctx.fillText(
        p.symbol,
        p.x,
        p.y
        );

        p.y -= p.speed;

        if(p.y < -20){

            p.y =
            height + 20;

            p.x =
            Math.random()*width;
        }

    });

    requestAnimationFrame(
    animate
    );

}

animate();