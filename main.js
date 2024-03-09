// Importing all DOM elements
var ttt = document.getElementById("tictactoe");
var hangman = document.getElementById("hangman");
var rsp = document.getElementById("rsp");
var mgame = document.getElementById("memorygame");
var myIFrame = document.getElementById("iframe");
var main = document.getElementById("page-main");
var navs = document.querySelectorAll(".nav-element");
var AboutusSection = document.querySelector(".about-us");
const aboutSectionWrapper = document.querySelector(".members-wrapper");
const firstRow = document.querySelector(".first-row");
const secondRow = document.querySelector(".second-row");

// 4 game
navs.forEach(function (nav, index) {
  nav.onclick = function () {
    main.style.display = "none";
    myIFrame.style.display = "block";
    AboutusSection.style.display = "none";
    if (index == 0) {
      myIFrame.setAttribute("src", "./tictactoe/index.html");
    } else if (index == 1) {
      myIFrame.setAttribute("src", "./rockscissorpaper/index.html");
    } else if (index == 2) {
      myIFrame.setAttribute("src", "./memorygame/index.html");
    } else if (index == 3) {
      AboutusSection.style.display = "flex";
      myIFrame.style.display = "none";
    }
  };
});

ttt.onclick = function () {
  myIFrame.style.display = "block";
  myIFrame.setAttribute("src", "./tictactoe/index.html");
  main.style.display = "none";
};

rsp.onclick = function () {
  myIFrame.style.display = "block";
  myIFrame.setAttribute("src", "./rockscissorpaper/index.html");
  main.style.display = "none";
};
mgame.onclick = function () {
  myIFrame.style.display = "block";
  myIFrame.setAttribute("src", "./memorygame/index.html");
  main.style.display = "none";
};

// Making about us section
const objectOfMembers = {
  names: [
    "Sushant Shah",
    "Aastha Acharya",
    "Shiva Karki",
    "Reward Karki",
    "Vikash Pokhrel",
    "Sneha Rajbanshi",
    "Mumukhshu Shrestha",
    "Grishmi Paudel",
  ],
  roll_no: [45, 2, 40, 23, 47, 42, 17, 13],
  description: [
    "My name is Sushant Shah. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sint.",
    "My name is Aastha Acharya. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sint.",
    "My name is Shiva Karki. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sint.",
    "My name is Reward Karki. I am a reserved and hardworking student. My handwriting is attractive.",
    "My name is Vikash Pokhrel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sint.",
    "My name is Sneha Rajbanshi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sint.",
    "My name is Mumukhshu Shrestha. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sint.",
    "My name is Grishmi Paudel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sint.",
  ],
  imageurl: [
    "SushantShah",
    "AasthaAcharya",
    "ShivaKarki",
    "Rewardkarki",
    "VikashPokhrel",
    "SnehaRajbanshi",
    "MumukhshuShrestha",
    "GrishmiPoudel",
  ],
};
for (let i = 0; i < 8; i++) {
  outerCard = document.createElement("div");
  outerCard.setAttribute("class", "card");

  showCard = document.createElement("div");
  hideCard = document.createElement("div");
  showCard.setAttribute("class", "show-card");
  hideCard.setAttribute("class", "hide-card");
  outerCard.append(showCard, hideCard);

  hideCard1 = document.createElement("img");
  hideCard2 = document.createElement("h4");
  hideCard3 = document.createElement("p");
  hideCard1.setAttribute(
    "src",
    `./images/aboutsUs/members/${objectOfMembers.imageurl[i]}.png`
  );
  hideCard2.innerText = "Roll no: " + objectOfMembers.roll_no[i];
  hideCard3.innerText = objectOfMembers.description[i];
  hideCard.append(hideCard1, hideCard2, hideCard3);

  showCard1 = document.createElement("img");
  showCard2 = document.createElement("h3");
  showCard3 = document.createElement("p");
  showCard.append(showCard1, showCard2, showCard3);
  showCard1.setAttribute("src", `./images/aboutsUs/person${i + 1}.png`);
  showCard2.innerText = objectOfMembers.names[i];
  showCard3.innerText = "Hello, I am a versatile student";

  if (i < 4) firstRow.append(outerCard);
  else secondRow.append(outerCard);
}
