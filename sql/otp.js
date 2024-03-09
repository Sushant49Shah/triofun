
// OTP email send
function sendotp() {
    const email = document.getElementById("email");
    const otpverify = document.querySelector("opt-verify");
  
    let otp_val = Math.floor(Math.random() * 10000);
  
    let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
    Email.send({
      SecureToken: "76706156-10d4-46c7-80f0-e53bd1da06d7",
      To: email.value,
      From: "sushantshah0409@gmail.com",
      Subject: "Email OTP using JavaScript",
      Body: emailbody,
    }).then((message) => {
      if (message === "OK") {
        alert("OTP sent to your email " + email.value);
  
        otpverify.style.display = "flex";
        const otp_inp = document.getElementById("otp_inp");
        const otp_btn = document.getElementById("sendotp");
  
        otp_btn.addEventListener("click", () => {
          if (otp_inp.value == otp_val) {
            alert("Email address verified...");
          } else {
            alert("Invalid OTP");
          }
        });
      }
    });
  }
  