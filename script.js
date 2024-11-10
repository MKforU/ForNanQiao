// Span Change
let start = document.querySelector(".start"),
input = document.querySelector(".input");

addEventListener("input", () => {
  let x = Math.abs(Math.round(input.value / 30)),
  y = Math.round(input.value / 76 * 10);
  start.innerHTML = `${x}` + ":" + `${y}`;
  if (y === 0) {
    start.innerHTML = `${x}` + ":" + `${y}0`;
  } else if (y === 1) {
    start.innerHTML = `${x}` + ":" + `${y}1`;
  } else if (y === 2) {
    start.innerHTML = `${x}` + ":" + `${y}2`;
  } else if (y === 3) {
    start.innerHTML = `${x}` + ":" + `${y}3`;
  } else if (y === 4) {
    start.innerHTML = `${x}` + ":" + `${y}4`;
  } else if (y === 5) {
    start.innerHTML = `${x}` + ":" + `${y}5`;
  } else if (y === 6) {
    start.innerHTML = `${x}` + ":" + `11`;
  } else if (y === 7) {
    start.innerHTML = `${x}` + ":" + `22`;
  } else if (y === 8) {
    start.innerHTML = `${x}` + ":" + `33`;
  } else if (y === 9) {
    start.innerHTML = `${x}` + ":" + `44`;
  }
});