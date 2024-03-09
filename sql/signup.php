<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
  <title>Sign-Up</title>
  <style>
    body {
      background-image: url("./images/background.jpeg") !important;
      background-size: cover;
      backdrop-filter: blur(5px);
      height: 100vh;
      width: 100vw;
    }
  </style>
</head>

<body>
  <!-- main container -->
  <div class="box">
    <form method="POST" class="container" onsubmit="return isValid">
      <div class="top">
        <header>Sign Up</header>
      </div>

      <div class="input-field">
        <input autocomplete="off" type="text" class="input" placeholder="Full Name" name="fullname"/>
        <i class='bx bx-ghost'></i>
        <div class="tick-or-cross">
          <img class="redCross" src="./images/redCross.png">
          <img class="greenTick" src="./images/greenTick.png">
        </div>
        <span></span>
      </div>

      <div class="input-field">
        <input autocomplete="off" type="email" class="input" placeholder="Email" name="email"/>
        <i class='bx bxl-gmail'></i>
        <div class="tick-or-cross">
          <img class="redCross" src="./images/redCross.png">
          <img class="greenTick" src="./images/greenTick.png">
        </div>
        <span></span>
      </div>

      <div class="input-field">
        <input autocomplete="off" type="text" class="input" placeholder="Username" name="username"/>
        <i class="bx bx-user"></i>
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
        <input autocomplete="off" type="password" class="input view-password" placeholder="Confirm Password"
          name="confirm-password"/>
        <i class="bx bx-lock-alt"></i>
        <div class="tick-or-cross">
          <img class="redCross" src="./images/redCross.png">
          <img class="greenTick" src="./images/greenTick.png">
        </div>
        <div class="view-not-view">
          <img class="view-pw" src="./images/notvieweye.png" alt="" onclick="viewOrNot('view',1)">
          <img class="not-view-pw" src="./images/vieweye.png" alt="" onclick="viewOrNot('notView',1)">
        </div>
        <span></span>
      </div>
      <div class="input-field">
        <input id="submit" type="submit" class="submit" value="Sign Up" name="submit"
          onclick="validateForm()" />
      </div>

      <div class="two-col">
        <label class="p-forward-pointer">Already have account?<span class="forward-pointer">&#8594;</span></label>
        <a id="goToLogin" href="login.php">Login</a>
      </div>
    </form>
  </div>

  <!-- importing js file  -->
  <script src="./script.js"></script>

  <!-- php codes starts from here: -->
  <?php
  $conn = mysqli_connect("localhost", "root", "root", "ComputerProject");
  if (!$conn)
    die("Connection error: " . mysqli_connect_error());
  else
    echo "Connection successful";
  function test_input($data)
  {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  // 1. Creating database
  // $sql = "CREATE DATABASE ComputerProject;"

  // 2. Creating table 
  // $sql = "CREATE TABLE sign_up (
  //     UserID int NOT NULL PRIMARY KEY,
  //     FullName varchar(255),
  //     Email varchar(255),
  //     UserName varchar(255),
  //     Password varchar(255)
  // );";
  
  // 3. Get values from form and insert into database
  if (isset($_POST['submit'])) {
    $userId = rand(1000, 9999);
    $full_name = test_input($_POST['fullname']);
    $email = test_input($_POST['email']);
    $username = test_input($_POST['username']);
    $password = test_input($_POST['password']);
    $c_password = test_input($_POST['confirm-password']);

    $checkSql = "SELECT * FROM sign_up WHERE UserName = '$username';";
    $res = mysqli_query($conn, $checkSql);
    if (mysqli_num_rows($res) != 1) {
      echo "Successfully signup";
      echo '<script type ="text/JavaScript">';
      echo 'alert("Signup successfull")';
      echo '</script>';
      $sql = "INSERT INTO sign_up (UserID, FullName, Email, UserName, Password)
        VALUES ($userId, '$full_name', '$email', '$username','$password');";

      $res = mysqli_query($conn, $sql);
      if ($res)
        echo "Successfully created";
      else
        echo "Failed to create" . mysqli_error($conn);
      header("Location: login.php");
    } else{
      die("Failed to sign up");
    }
  }
  mysqli_close($conn);
  ?>
</body>

</html>