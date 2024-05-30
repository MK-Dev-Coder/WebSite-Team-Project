<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Process the login info here
    
}
?>
<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Process the login info here
    

    // Store account information in session variables
    $_SESSION['username'] = $username;
    $_SESSION['password'] = $password;

    // Redirect to a logged-in page
    header('Location: logged-in.php');
    exit;
}
?>