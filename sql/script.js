function validateForm() {
  var allInputs = [];
  var AllredCross = [];
  var AllgreenTick = [];
  const inputs = document.querySelectorAll("input");
  const redCrosses = document.querySelectorAll(".redCross");
  const greenTicks = document.querySelectorAll(".greenTick");
  const messageSpan = document.querySelectorAll(".input-field span");
  const messages = [
    "Full Name",
    "Email",
    "Username",
    "Password",
    "Confirm Password",
  ];
  const rememberMe = document.querySelector("#rememberme");
  const datalistOfUsername = document.querySelector("#usernameRememberMe")

  // making node list to array of all inputs via forEach loop
  inputs.forEach(function (input, i) {
    input.setAttribute("onkeyup", "validateForm()");
    if(input.type !== "password")
    allInputs[i] = input.value.trim();
  else
  allInputs[i] = input.value;
  });
  redCrosses.forEach(function (redCross, i) {
    AllredCross[i] = redCross;
  });
  greenTicks.forEach(function (greenTick, i) {
    AllgreenTick[i] = greenTick;
  });
  isValid = true;

  for (i = 0; i < allInputs.length - 1; i++) {
    if (
      ((i == 3 || i == 4) && allInputs.length == 6) ||
      (i == 1 && allInputs.length == 3)
    ) {
      if (allInputs[i].length < 8) {
        AllgreenTick[i].style.display = "none";
        AllredCross[i].style.display = "block";
        isValid = false;
        if (allInputs[i].length == 0){
          if(allInputs.length == 6)
          messageSpan[i].innerHTML = messages[i] + " must not be blank.";
          else
          messageSpan[i].innerHTML = messages[3] + " must not be blank.";
        }
        else
          messageSpan[i].innerHTML = "Password must be at least 8 characters.";
      }else if(checkStrongPassword(allInputs[i]).length > 0 && allInputs.length ==6 ){
        messageSpan[i].innerHTML = checkStrongPassword(allInputs[i])[0];
      }
       else {
        AllredCross[i].style.display = "none";
        AllgreenTick[i].style.display = "block";
        messageSpan[i].innerHTML = "";

        // checking password and confirm pw are equal or not
        if (allInputs.length == 6 && allInputs[3] !== allInputs[4]) {
          AllgreenTick[4].style.display = "none";
          AllredCross[4].style.display = "block";
          messageSpan[4].innerHTML = "Password and confirm pw must be same.";
          isValid = false;
        } else if (allInputs[3] === allInputs[4] && allInputs.length ==6) {
          AllredCross[4].style.display = "none";
          AllgreenTick[4].style.display = "block";
        }
      }
    } else {
      // checking for all input fields
      if (allInputs[i].length == 0) {
        AllgreenTick[i].style.display = "none";
        AllredCross[i].style.display = "block";
        isValid = false;
        if(allInputs.length == 6)
        messageSpan[i].innerHTML = messages[i] + " cannot be blanked.";
      else{
        messageSpan[0].innerHTML = messages[2] + " cannot be blanked.";
        messageSpan[1].innerHTML = messages[3] + " cannot be blanked.";
      }
      } else {
        AllredCross[i].style.display = "none";
        AllgreenTick[i].style.display = "block";
        messageSpan[i].innerHTML = "";
        // checking email for signup only
       if(allInputs.length == 6){
        if (checkEmail(allInputs[1])[0] !== 1) {
          messageSpan[1].innerHTML = "Email must contain @";
          AllredCross[1].style.display = "block";
          AllgreenTick[1].style.display = "none";
          isValid = false;
        } else if (checkEmail(allInputs[1])[1] === 0) {
          messageSpan[1].innerHTML = "Email must contain gmail after @";
          AllredCross[1].style.display = "block";
          AllgreenTick[1].style.display = "none";
          isValid = false;
        }
       }
      }
    }
  }
  // for remember me part
  if(allInputs.length !== 6){
    if(rememberMe.checked)
    datalistOfUsername.innerHTML = `<option value="${allInputs[0]}"></option>`;
  }
}

function checkEmail(emailId) {
  count1 = 0;
  count2 = 0;
  postionCount = 0;
  for (let i = 0; i < emailId.length; i++) {
    if (emailId[i] == "@") {
      count1++;
      postionCount = i + 1;
    }
    if (emailId.slice(postionCount, postionCount + 5) == "gmail") count2++;
  }
  return [count1, count2];
}

function checkStrongPassword(password) {
  countNumber = 0;
  countAlphabet = 0;
  countSpace = 0;
  countSpecialChar = 0;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") countNumber++;
    else if (password[i].toLowerCase() >= "a" && password[i].toLowerCase() <= "z")
      countAlphabet++;
    else if (password[i] == " ") countSpace++;
    else countSpecialChar++;
  }
  passwordResult = [];
  if (countSpace != 0)
    passwordResult.push("Must not contain any space in password");
  if (countNumber == 0) passwordResult.push("Must contain at least 1 number");
  if (countAlphabet < 5)
    passwordResult.push("Must contain at least 5 alphabet");
  if (countSpecialChar == 0)
    passwordResult.push("Must contain special character(s) in password");
  return passwordResult;
}

// view and not view
function viewOrNot(option, i) {
  let pw = document.querySelectorAll(".view-password");
  notViewImg = document.querySelectorAll(".not-view-pw");
  viewImg = document.querySelectorAll(".view-pw");
  if (option == "view") {
    pw[i].type = "text";
    viewImg[i].style.display = "none";
    notViewImg[i].style.display = "block";
  } else if (option == "notView") {
    pw[i].type = "password";
    notViewImg[i].style.display = "none";
    viewImg[i].style.display = "block";
  }
}
