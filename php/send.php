<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "galangowin30@gmail.com";
    $subject = "New Subscription";
    $email = filter_var($_POST['userEmail'], FILTER_SANITIZE_EMAIL);
    $message = "Email user: " . $email;
    $headers = "From: noreply@yourdomain.com" . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
