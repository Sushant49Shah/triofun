// Importing all DOM elements
var divs = document.querySelectorAll(".box");
var restart = document.querySelector("button");
var xTurn = document.querySelector(".x-turn");
var oTurn = document.querySelector(".o-turn");
var gif1 = document.querySelector(".gif");
var gif2 = document.querySelector(".gif2");
var gif3 = document.querySelector(".drawgif");
var count = true;
var turnMusic = new Audio("./turnMusic.mp3");
var winMusic = new Audio("./afterWin.mp3");
var drawMusic = new Audio("./draw.mp3");

const collection = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

const gameOver = () => {
  divs.forEach((e) => {
    e.className += " nthg";
  });
  draw = false;
};

var x = [];
var o = [];
var draw = true;

divs.forEach(function (div) {
  div.addEventListener("click", function () {
    if (div.className == "box") {
      if (count) {
        x.push(parseInt(div.id));
        div.classList.add("cross");
        xTurn.classList.remove("turn-active");
        oTurn.classList.add("turn-active");
        turnMusic.play();
      }
      if (!count) {
        o.push(parseInt(div.id));
        div.classList.add("aalu");
        oTurn.classList.remove("turn-active");
        xTurn.classList.add("turn-active");
        turnMusic.play();
      }
      count = !count;

      // checking all the elements of x and o in collection
      for (i = 0; i < collection.length; i++) {
        if (collection[i].every((elem) => x.includes(elem))) {
          xTurn.style.fontWeight = "bold";
          xTurn.style.color = "yellow";
          oTurn.classList.remove("turn-active");
          xTurn.classList.remove("turn-active");
          winMusic.play();
          gameOver();
          gif1.style.width = "200px";
          gif2.style.width = "auto";
        }
        if (collection[i].every((elem) => o.includes(elem))) {
          oTurn.style.fontWeight = "bold";
          oTurn.style.color = "yellow";
          oTurn.classList.remove("turn-active");
          xTurn.classList.remove("turn-active");
          winMusic.play();
          gameOver();
          gif1.style.width = "200px";
          gif2.style.width = "auto";
        }
      }
      if (x.length + o.length == 9 && draw) {
        gif3.style.width = "200px";
        drawMusic.play();
        oTurn.classList.add("turn-active");
          xTurn.classList.add("turn-active");
      }
    }
  });
});

restart.addEventListener("click", () => {
  divs.forEach((e) => {
    e.className = "box";
  });
  x = [];
  o = [];
  draw = true;
  count = true;
  gif1.style.width = "0px";
  gif2.style.width = "0px";
  gif3.style.width = "0px";
  oTurn.classList.remove("turn-active");
  xTurn.classList.add("turn-active");
  oTurn.style.fontWeight = "";
  oTurn.style.color = "";
  xTurn.style.fontWeight = "";
  xTurn.style.color = "";
});
