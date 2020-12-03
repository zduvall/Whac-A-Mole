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
    
}))

});

let hideMole = function (hiddenMole) {
  hiddenMole.classList.add("wgs__mole-head--hidden");

  setTimeout(() => {
    popUpRandomMole();
  }, 1000);
};

let popUpRandomMole = function () {
  let moleHeads = Array.from(document.querySelectorAll(".wgs__mole-head"));
  let iMole = Math.floor(Math.random() * 8);
  let hiddenMole = moleHeads[iMole]
  hiddenMole.classList.remove("wgs__mole-head--hidden");

  setTimeout(() => {
    hideMole(hiddenMole);
  }, 3000);
};
