let gameStyle = "oneHitPerHole"
let moleCount = 15;

window.addEventListener("DOMContentLoaded", () => {
    //   setInterval(() => {
    //     const moleHeads = document.querySelectorAll('.wgs__mole-head');
    //     for (let moleHead of moleHeads) {
    //       moleHead.classList.toggle('wgs__mole-head--hidden');
    //     }
    //   }, 1000);

    setTimeout(() => {
        popUpRandomMole();
    }, 500);

    let moleHeads = Array.from(document.querySelectorAll(".wgs__mole-head"));
    if (gameStyle === "oneHitPerHole") moleCount = moleHeads.length;

    let subHeaderTitle = document.getElementById("sub-header-title");
    subHeaderTitle.innerHTML = `moles left: ${moleCount}`;


    moleHeads.forEach(moleHead => moleHead.addEventListener("click", (event) => {
        event.target.classList.add("wgs__mole-head--hidden");
        event.target.classList.add("wgs__mole-head--whacked");

        moleCount--;
        subHeaderTitle.innerHTML = `moles left: ${moleCount}`;

        // Declare the game is won when there are no moles that haven't been whacked
        if (moleCount === 0) {
            subHeaderTitle.innerHTML = "winner!";
            moleHeads.forEach(moleHead => moleHead.classList.add("wgs__mole-head--game-won"));
        }
    }))

});




function popUpRandomMole() {
    let moleHeadsStillAvailable;
    if (gameStyle === "oneHitPerHole") {
        moleHeadsStillAvailable = Array.from(document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)"));
    } else {
        moleHeadsStillAvailable = Array.from(document.querySelectorAll(".wgs__mole-head"))
    }

    let iMole = Math.floor(Math.random() * moleHeadsStillAvailable.length);
    let hiddenMole = moleHeadsStillAvailable[iMole]
    hiddenMole.classList.remove("wgs__mole-head--hidden");

    if (moleCount > 0) {
        setTimeout(() => {
            hideMole(hiddenMole);
        }, 1500);
    }
};



function hideMole(hiddenMole) {
    hiddenMole.classList.add("wgs__mole-head--hidden");

    setTimeout(() => {
        popUpRandomMole();
    }, 500);
};