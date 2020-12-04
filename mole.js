let gameStyle = "oneHitPerHole"
let moleCount = 15;

window.addEventListener("DOMContentLoaded", () => {
    //   setInterval(() => {
    //     const moleHeads = document.querySelectorAll('.wgs__mole-head');
    //     for (let moleHead of moleHeads) {
    //       moleHead.classList.toggle('wgs__mole-head--hidden');
    //     }
    //   }, 1000);

    let startGameButton = document.getElementById("start-game-button");


    let moleHeads = Array.from(document.querySelectorAll(".wgs__mole-head"));

    let subHeaderTitle = document.getElementById("sub-header-title");

    startGameButton.addEventListener("click", () => {
        if (gameStyle === "oneHitPerHole") moleCount = moleHeads.length;
        subHeaderTitle.innerHTML = `moles left: ${moleCount}`;
        startGameButton.disabled = true;
        startGameButton.classList.remove("start-game-button--hover", "start-game-button--active")

        moleHeads.forEach(moleHead => {
            moleHead.classList.remove("wgs__mole-head--whacked", "wgs__mole-head--game-won")
        })

        setTimeout(() => {
            popUpRandomMole();
        }, 500);
    })

    moleHeads.forEach(moleHead => moleHead.addEventListener("click", (event) => {
        event.target.classList.add("wgs__mole-head--hidden", "wgs__mole-head--whacked");

        moleCount--;
        subHeaderTitle.innerHTML = `moles left: ${moleCount}`;

        // What happens when the game is won?
        if (moleCount === 0) {
            subHeaderTitle.innerHTML = "winner!";
            moleHeads.forEach(moleHead => moleHead.classList.add("wgs__mole-head--game-won"));
            startGameButton.disabled = false;
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