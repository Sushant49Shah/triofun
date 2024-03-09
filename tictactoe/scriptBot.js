const divs = document.querySelectorAll("div");
var count = true;
var xo = []
var botCondition = true;
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

var x = [];
var o = [];
divs.forEach((div) => {
  div.addEventListener("click", () => {
    x.push(parseInt(div.id));
    div.className = "cross";
    a = Math.floor(Math.random() * 9);
    console.log("first", a);
    xo = x.concat(o);
    while (botCondition) {
        xo.forEach((e) => {
            if (e == a) {
                a = Math.floor(Math.random() * 9);
            } else {
                botCondition = false;
            }
        });
    }
    console.log("second", a);
    o.push(a);
    console.log(xo)
    divs[a].className = "aalu";
    for (i = 0; i < collection.length; i++) {
      if (collection[i].every((elem) => x.includes(elem-1))) {
        console.log("X won");
      }
      if (collection[i].every((elem) => o.includes(elem-1))) {
        console.log("O won");
      }
    }
  });
});
