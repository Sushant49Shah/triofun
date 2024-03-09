// Importing DOM elements
var arrayOfNumbers = [];
var cards = document.getElementById("cards");
var flipMusic = new Audio('./flip.mp3');
var flipDone = new Audio('./flipDone.mp3');
var winMusic = new Audio('./afterWin.mp3');
cardFlipped = 0;

function generateNumber() {
  while (true) {
    count = 0;
    let random = Math.floor(9 * Math.random()) + 1; 
    // check how many number are equal to random in arrayOfNumbers
    for (i = 0; i < arrayOfNumbers.length; i++) {
      if (arrayOfNumbers[i] == random) count++;
    }
    if (count < 2) {
      arrayOfNumbers.push(random);
    }
    if (arrayOfNumbers.length == 18) break;
  }
}

for (let i = 0; i < 18; i++) {
  generateNumber();

  var mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "card center card-hover");

  var frontDiv = document.createElement("div");
  frontDiv.setAttribute("class", "front");

  var backDiv = document.createElement("img");
  backDiv.setAttribute("class", "back");

  backDiv.setAttribute("src", `./images/imgs/${arrayOfNumbers[i]}.png`);

  mainDiv.appendChild(frontDiv);
  mainDiv.appendChild(backDiv);
  cards.appendChild(mainDiv);
}

function restart() {
  document.querySelectorAll(".front").forEach(function (cards) {
    cards.style.display = "block";
    cards.style.visibility = "visible";
  });
  frontCount = 0;
  clickCount = 0;
  cardFlipped = 0;
  srcs = [];
  ques = [];
  loose = true;
  flipCount.innerText = 44;
}

// initializing 
frontCount = 0;
clickCount = 0;
srcs = [];
ques = [];
loose = true;
allCards = document.querySelectorAll(".front");
flipCount = document.querySelector("#counter");

allCards.forEach(function (card) {
  card.addEventListener("click", function (e) {
    clickCount++;
    flipMusic.play();
    flipCount.innerText = 44 - clickCount;
    e.target.style.display = "none";
    e.target.className += " flip";
    e.target.nextElementSibling.className += " flip";
    srcs[frontCount] = e.target.nextElementSibling.src;
    ques[frontCount] = e.target;

    frontCount++;
    if (frontCount == 2) {
      if (srcs[0] == srcs[1]) {
        flipDone.play();
        ques[0].style.visibility = "hidden";
        ques[1].style.visibility = "hidden";
        cardFlipped++;
        ques[0].parentElement.classList.remove("card-hover")
        ques[1].parentElement.classList.remove("card-hover")
      } else {
        setTimeout(() => {
          allCards.forEach(function (cards) {
            cards.style.display = "block";
          });
        }, 500);
      }
      frontCount = 0;
      srcs = [];
      ques = [];
    }
    // checking the winning condition 
    if(cardFlipped == 9){
      winMusic.play();
      resultString = "You won by "+ flipCount + " in hands.";
      setTimeout(() => {
        alert(resultString);
      }, 1000);
      loose = false;
    }

    // making the loosing condition 
    if(flipCount.innerText == 0 && loose){
      setTimeout(() => {
        alert("Sorry, You lost the game\nYou only get 44 flip.")
      }, 100);
    }

  });
  
});
