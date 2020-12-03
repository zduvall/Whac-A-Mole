// window.addEventListener('DOMContentLoaded', () => {

//   setInterval(() => {
//     const moleHeads = document.querySelectorAll('.wgs__mole-head');
//     for (let moleHead of moleHeads) {
//       moleHead.classList.toggle('wgs__mole-head--hidden');
//     }
//   }, 1000);

// });

let popUpRandomMole = function () {
    let moleHeads = Array.from(document.querySelectorAll(".wgs__mole-head"));
    let iMole = Math.floor(Math.random() * 8);
    moleHeads[iMole].classList.remove("wgs__mole-head--hidden");
}