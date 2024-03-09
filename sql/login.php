<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

  <title>Login</title>
  <style>
     body{
      background-image: url("./images/background.jpeg") !important;
      background-size: cover;
      backdrop-filter: blur(5px);
      height: 100vh;
      width: 100vw;
    }
  </style>
</head>

<body>
  <div class="box">
    <form method="POST" class="container" onsubmit="return isValid">
      <div class="top">
        <span><a href="signup.php">Don't have an account? Sign Up here.</a></span>
        <header>Login</header>
      </div>

      <div class="input-field">
        <input autocomplete="off" type="text" class="input" list="usernameRememberMe" placeholder="Username" name="username"/>
        <i class="bx bx-user"></i>
        <datalist id="usernameRememberMe">
        </datalist>
        <div class="tick-or-cross">
          <img class="redCross" src="./images/redCross.png">
          <img class="greenTick" src="./images/greenTick.png">
        </div>
        <span></span>
      </div>

      <div class="input-field">
        <input autocomplete="off" type="password" class="input view-password" placeholder="Password" name="password"/>
        <i class="bx bx-lock-alt"></i>
        <div class="tick-or-cross">
          <img class="redCross" src="./images/redCross.png">
          <img class="greenTick" src="./images/greenTick.png">
        </div>
        <div class="view-not-view">
          <img class="view-pw" src="./images/notvieweye.png" alt="" onclick="viewOrNot('view',0)">
          <img class="not-view-pw" src="./images/vieweye.png" alt="" onclick="viewOrNot('notView',0)">
        </div>
        <span></span>
      </div>

      <div class="input-field">
        <button type="submit" class="submit" value="Login" name="button" onclick="validateForm()">Login</button>
      </div>
      <div class="two-col">
        <div class="one">
          <input type="checkbox" name="" id="rememberme" />
          <label for="check"> Remember Me</label>
        </div>
        <div class="two">
          <label><a href="./signup.php">Sign Up Here!</a></label>

        </div>
      </div>
    </form>
  </div>

  <script src="./script.js"></script>

  <!-- php codes starts from here: -->
  <?php
session_start();

// Database connection
$conn = mysqli_connect("localhost", "root", "root", "ComputerProject");
    if (!$conn)
      die("Connection error: " . mysqli_connect_error());
  
// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];

// SQL injection prevention
$username = mysqli_real_escape_string($conn, $username);
$password = mysqli_real_escape_string($conn, $password);

// Fetch user from database
$query = "SELECT * FROM sign_up WHERE username='$username' AND password='$password'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) == 1) {
    // Login successful
    echo '<script type ="text/JavaScript">';
      echo 'alert("Login successfull")';
      echo '</script>';
    $_SESSION['username'] = $username;
    header("Location: ../main.php"); // Redirect to main page after successful login
} else {
    print_r("Login Failed");
}

mysqli_close($conn);
?>
</body>

</html>