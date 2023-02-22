let btn = document.querySelector("button");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let h1 = document.querySelector("h1");
let diceroll = () => {
  let a = Math.random() * 6;
  a = Math.floor(a) + 1;
  let one = `dice asset/dice${a}.jpg`;
  img1.setAttribute("src", one);
  let b = Math.random() * 6;
  b = Math.floor(b) + 1;
  let two = `dice asset/dice${b}.jpg`;
  img2.setAttribute("src", two);
  if (a > b) {
    h1.textContent = "PLAYER ONE WON";
  } else if (b > a) {
    h1.textContent = "PLAYER TWO WON";
  } else {
    h1.textContent = "DRAW ";
  }
};
btn.addEventListener("click", diceroll);
