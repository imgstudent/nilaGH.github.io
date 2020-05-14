<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $mailTo = "nkundu@northislandcollege.ca";
    $headers = "From: ".$emailFrom;
    $txt = "You have received an e-mail from ".$name."\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
}