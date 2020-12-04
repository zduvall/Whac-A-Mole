window.addEventListener("DOMContentLoaded", () => {
    //   setInterval(() => {
    //     const moleHeads = document.querySelectorAll('.wgs__mole-head');
    //     for (let moleHead of moleHeads) {
    //       moleHead.classList.toggle('wgs__mole-head--hidden');
    //     }
    //   }, 1000);

    setTimeout(() => {
        popUpRandomMole();
    }, 1000);

    let moleHeads = Array.from(document.querySelectorAll(".wgs__mole-head"));

    moleHeads.forEach(moleHead => moleHead.addEventListener("click", (event) => {
        event.target.classList.add("wgs__mole-head--hidden");
        event.target.classList.add("wgs__mole-head--whacked");

        let moleHeadsStillAvailable = Array.from(document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)"));
        let subHeaderTitle = document.getElementById("sub-header-title")
        subHeaderTitle.innerHTML = `moles left: ${0 || moleHeadsStillAvailable.length}`

        // Declare the game is won when there are no moles that haven't been whacked
        if (moleHeadsStillAvailable.length === 0) {
            subHeaderTitle.innerHTML = "winner!"
            moleHeads.forEach(moleHead => moleHead.classList.add("wgs__mole-head--game-won"))
        }
    }))

});

let hideMole = function (hiddenMole) {
    hiddenMole.classList.add("wgs__mole-head--hidden");

    setTimeout(() => {
        popUpRandomMole();
    }, 1000);
};

let popUpRandomMole = function () {
    let moleHeadsStillAvailable = Array.from(document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)"));
    let iMole = Math.floor(Math.random() * moleHeadsStillAvailable.length);
    let hiddenMole = moleHeadsStillAvailable[iMole]
    hiddenMole.classList.remove("wgs__mole-head--hidden");

    setTimeout(() => {
        hideMole(hiddenMole);
    }, 2000);
};
