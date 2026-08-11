/* =====================================
   START OF OUR STORY

   12 January 2024
   Exact time unknown.

   We use 12:00 AM as the
   starting time.
===================================== */

const startDate =
    new Date("2024-01-12T00:00:00");


/* =====================================
   OPEN THE SURPRISE
===================================== */

function openLove() {

    const intro =
        document.getElementById("intro");

    const main =
        document.getElementById("main-content");


    intro.style.display = "none";

    main.style.display = "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    updateLiveCounter();


    setInterval(
        updateLiveCounter,
        1000
    );


    startFloatingHearts();
}



/* =====================================
   LIVE COUNTER
===================================== */

function updateLiveCounter() {

    const now = new Date();


    const difference =
        now - startDate;


    if (difference < 0) {
        return;
    }


    /* Total elapsed seconds */

    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    /* Days */

    const days =
        Math.floor(
            totalSeconds / 86400
        );


    /* Hours */

    const hours =
        Math.floor(
            (totalSeconds % 86400)
            / 3600
        );


    /* Minutes */

    const minutes =
        Math.floor(
            (totalSeconds % 3600)
            / 60
        );


    /* Seconds */

    const seconds =
        totalSeconds % 60;


    /* =================================
       UPDATE LIVE COUNTER
    ================================= */

    document.getElementById(
        "live-days"
    ).textContent =
        days.toLocaleString();


    document.getElementById(
        "live-hours"
    ).textContent =
        hours;


    document.getElementById(
        "live-minutes"
    ).textContent =
        minutes;


    document.getElementById(
        "live-seconds"
    ).textContent =
        seconds;


    /* =================================
       UPDATE TOTAL SECONDS
       IN THE 31-MONTH SECTION
    ================================= */

    document.getElementById(
        "total-seconds"
    ).textContent =
        totalSeconds.toLocaleString();
}



/* =====================================
   FLOATING HEARTS
===================================== */

function createFloatingHeart() {

    const container =
        document.getElementById(
            "floating-hearts"
        );


    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    const symbols = [
        "♡",
        "♥",
        "💗",
        "💕",
        "✦",
        "♡"
    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random()
                * symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (12 + Math.random() * 22)
        + "px";


    heart.style.color =
        Math.random() > 0.5
        ? "#e79ab5"
        : "#b89bd9";


    const duration =
        5 + Math.random() * 5;


    heart.style.animationDuration =
        duration + "s";


    container.appendChild(
        heart
    );


    setTimeout(
        () => heart.remove(),
        duration * 1000
    );
}


function startFloatingHearts() {

    setInterval(
        createFloatingHeart,
        700
    );
}
