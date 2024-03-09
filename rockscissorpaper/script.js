// Get  to DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  userH2 = document.querySelector(".user_h2"),
  cpuResult = document.querySelector(".cpu_result img"),
  cpuH2 = document.querySelector(".cpu_h2"),
  result = document.querySelector(".result"),
  userHistory = document.querySelector(".user_history .cards"),
  cpuHistory = document.querySelector(".cpu_history .cards"),
  optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    userH2.style.color = "";
      cpuH2.style.color = "";
    image.classList.add("active");
    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;
      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["images/rock.png", "images/paper.png", "images/scissor.png"];
      cpuResult.src = cpuImages[randomNumber];
      let cpuValue = ["Rock", "Paper", "Scissor"][randomNumber];
      let userValue = ["Rock", "Paper", "Scissor"][index];

      let outcomes = {
        RockRock: "Draw",
        RockPaper: "Cpu",
        RockScissor: "User",
        PaperPaper: "Draw",
        PaperRock: "User",
        PaperScissor: "Cpu",
        ScissorScissor: "Draw",
        ScissorRock: "Cpu",
        ScissorPaper: "User",
      };
      let outComeValue = outcomes[userValue + cpuValue];
      // styling the winner 
      if(outComeValue == "User"){
        userH2.style.color = "red";
        createDiv(userHistory,userValue,cpuValue);
      }
      else if(outComeValue == "Cpu"){
        cpuH2.style.color = "red";
        createDiv(cpuHistory,userValue,cpuValue);
      }
      // Display the result
      result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});

// making cpu and user history 
function createDiv(player,userValue,cpuValue){
  var card = document.createElement("div");
  card.className = "card";
  var span1 = document.createElement("span");
  span1.innerText = userValue;
  var span2 = document.createElement("span");
  span2.innerText = cpuValue;
  card.append(span1,"-",span2);
  player.append(card);
}