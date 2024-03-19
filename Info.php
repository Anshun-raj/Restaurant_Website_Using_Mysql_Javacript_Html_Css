<?php
  $connect=mysqli_connect('localhost','root');
  mysqli_select_db($connect,'test');
  $name=$_POST['nm'];
  $email=$_POST['em'];
  $age=$_POST['age'];
  $textarea=$_POST['num'];
  $query="INSERT INTO `getData`(`name`,`age`,`email`,`number`) VALUES ('$name','$age','$email','$number')";
  mysqli_query($connect,$query);
  echo "Info has been sent";
?>