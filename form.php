<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $interest = $_POST['interest'];

    $to = 'connorhager12@gmail.com';
    $subject = 'New Interest Form Submission';
    $message = "Name: $name\nEmail: $email\nInterest: $interest";
    $headers = 'From: connorhager12@gmail.com';

    // Send email
    mail($to, $subject, $message, $headers);
}

?>