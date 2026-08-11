/* =========================================
   START DATE

   12 January 2024
   Time unknown, so we use 12:00 AM
========================================= */

const startDate = new Date("2024-01-12T00:00:00");


/* =========================================
   OPEN THE SURPRISE
========================================= */

function openLove() {

    const intro = document.getElementById("intro");

    const main = document.getElementById("main-content");

    intro.style.display = "none";

    main.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    updateCounter();

    setInterval(updateCounter, 1000);

    startFloatingHearts();
}


/* =========================================
   LIVE TOGETHERNESS COUNTER
========================================= */

function updateCounter() {

    const now = new Date();

    let months =
        (now.getFullYear() - startDate.getFullYear()) * 12
        +
        (now.getMonth() - startDate.getMonth());


    let anniversary = new Date(startDate);

    anniversary.setMonth(
        startDate.getMonth() + months
    );


    if (anniversary > now) {

        months--;

        anniversary = new Date(startDate);

        anniversary.setMonth(
            startDate.getMonth() + months
        );
    }


    const remaining =
        now - anniversary;


    const days =
        Math.floor(
            remaining /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (remaining /
                (1000 * 60 * 60))
        ) % 24;


    const minutes =
        Math.floor(
            (remaining /
                (1000 * 60))
        ) % 60;


    const seconds =
        Math.floor(
            remaining / 1000
        ) % 60;


    document.getElementById("months").textContent =
        months;


    document.getElementById("days").textContent =
        days;


    document.getElementById("hours").textContent =
        hours;


    document.getElementById("minutes").textContent =
        minutes;


    document.getElementById("seconds").textContent =
        seconds;
}


/* =========================================
   FLOATING HEARTS
========================================= */

function createFloatingHeart() {

    const container =
        document.getElementById("floating-hearts");


    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    const symbols = [
        "♡",
        "♥",
        "♡",
        "✦",
        "💗",
        "💕"
    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (12 + Math.random() * 22) + "px";


    heart.style.color =
        Math.random() > 0.5
            ? "#e79ab5"
            : "#b89bd9";


    const duration =
        5 + Math.random() * 5;


    heart.style.animationDuration =
        duration + "s";


    container.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);
}


function startFloatingHearts() {

    setInterval(
        createFloatingHeart,
        700
    );
      }0
