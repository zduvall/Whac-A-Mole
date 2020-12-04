let gameStyle, moleCount;

window.addEventListener("DOMContentLoaded", () => {
    let moleHeads = Array.from(document.querySelectorAll(".wgs__mole-head"));

    let startEasyButton = document.getElementById("start-easy-button");
    let startHardButton = document.getElementById("start-hard-button");
    let startButtons = document.getElementsByClassName("start-game__button")

    let subHeaderTitle = document.getElementById("sub-header-title");

    // start game easy or hard
    startEasyButton.addEventListener("click", () => {
        gameStyle = "easy"
        startGame()
    })
    startHardButton.addEventListener("click", () => {
        gameStyle = "hard"
        startGame()
    })

    function startGame() {
        moleCount = gameStyle === "easy" ? moleHeads.length : 16;
        subHeaderTitle.innerHTML = `moles left: ${moleCount}`;
        for (let startButton of startButtons) {
            startButton.disabled = true;
            startButton.classList.remove("start-game-button--hover", "start-game-button--active")
        }

        moleHeads.forEach(moleHead => {
            moleHead.classList.remove("wgs__mole-head--whacked", "wgs__mole-head--game-won")
        })

        setTimeout(() => {
            popUpRandomMole();
        }, 500);
    }

    moleHeads.forEach(moleHead => moleHead.addEventListener("click", (event) => {
        event.target.classList.add("wgs__mole-head--hidden", "wgs__mole-head--whacked");

        moleCount--;
        subHeaderTitle.innerHTML = `moles left: ${moleCount}`;

        // What happens when the game is won?
        if (moleCount === 0) {
            subHeaderTitle.innerHTML = "winner!";
            moleHeads.forEach(moleHead => moleHead.classList.add("wgs__mole-head--game-won"));
            for (let startButton of startButtons) {
                startButton.disabled = false;
            }
        }
    }))

});




function popUpRandomMole() {
    let moleHeadsStillAvailable;
    if (gameStyle === "easy") {
        moleHeadsStillAvailable = Array.from(document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)"));
    } else {
        moleHeadsStillAvailable = Array.from(document.querySelectorAll(".wgs__mole-head"))
    }

    let moleIndex = Math.floor(Math.random() * moleHeadsStillAvailable.length);
    let hiddenMole = moleHeadsStillAvailable[moleIndex]
    hiddenMole.classList.remove("wgs__mole-head--hidden");

    let stayUpTime = gameStyle === 'easy' ? 1500 : 900;

    if (moleCount > 0) {
        setTimeout(() => {
            hideMole(hiddenMole);
        }, stayUpTime);
    }
};



function hideMole(hiddenMole) {
    hiddenMole.classList.add("wgs__mole-head--hidden");

    let hideMoleTime = gameStyle === 'easy' ? 500 : 300;

    setTimeout(() => {
        popUpRandomMole();
    }, hideMoleTime);
};