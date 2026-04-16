<?php

// It's good practice to use namespaces.
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // --- SERVER-SIDE VALIDATION ---
    // This is crucial for security and data integrity.
    $errors = [];
    $name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING));
    $email = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
    $phone = trim(filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING));
    $subject = trim(filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING));
    $message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING));

    if (empty($name) || strlen($name) < 3) {
        $errors[] = "Full name is required and must be at least 3 characters.";
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "A valid email address is required.";
    }
    if (empty($message)) {
        $errors[] = "Message is required.";
    }

    if (!empty($errors)) {
        // For a better user experience, you could redirect back with error messages.
        $error_query = http_build_query(['errors' => $errors]);
        header("Location: Contact Us.php?status=validation_failed&" . $error_query);
        exit();
    }

    // --- DATABASE INSERTION (using Prepared Statements) ---
    // Using prepared statements is the standard way to prevent SQL injection.
    $sql = "INSERT INTO contact_messages (full_name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        error_log("Database prepare failed: " . $conn->error);
        header("Location: Contact Us.php?status=dberror");
        exit();
    }

    $stmt->bind_param("sssss", $name, $email, $phone, $subject, $message);

    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();

        // --- EMAIL SENDING CODE ---
        require 'PHPMailer/src/Exception.php';
        require 'PHPMailer/src/PHPMailer.php';
        require 'PHPMailer/src/SMTP.php';

        $mail = new PHPMailer(true);

        try {
            // SMTP Server Settings
            // WARNING: Storing credentials in code is a major security risk.
            // Use environment variables or a secure config file outside the web root.
            $mail->isSMTP();
            $mail->Host = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = getenv('SMTP_USER') ?: 'kdavidsp.school@gmail.com';
            $mail->Password = getenv('SMTP_PASS') ?: 'yfht rdvq hvif lykk'; // This should be an App Password for Gmail
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = getenv('SMTP_PORT') ?: 587;

            // Recipients
            $mail->setFrom(getenv('SMTP_USER') ?: 'kdavidsp.school@gmail.com', 'School Website Portal');
            $mail->addAddress(getenv('SMTP_USER') ?: 'kdavidsp.school@gmail.com');
            $mail->addReplyTo($email, $name);

            // Content - Use htmlspecialchars to prevent XSS in the email body.
            $mail->isHTML(true);
            $mail->Subject = "New Website Message: " . htmlspecialchars($subject);
            $mail->Body = "<h3>New Message Details</h3>" .
                          "<b>Name:</b> " . htmlspecialchars($name) . "<br>" .
                          "<b>Email:</b> " . htmlspecialchars($email) . "<br>" .
                          "<b>Phone:</b> " . htmlspecialchars($phone) . "<br>" .
                          "<b>Message:</b><p>" . nl2br(htmlspecialchars($message)) . "</p>";
            $mail->AltBody = "Name: " . htmlspecialchars($name) . "\n" .
                             "Email: " . htmlspecialchars($email) . "\n" .
                             "Phone: " . htmlspecialchars($phone) . "\n\n" .
                             "Message:\n" . htmlspecialchars($message);

            $mail->send();

            header("Location: Contact Us.php?status=success");
            exit();

        } catch (Exception $e) {
            // If email fails, log the error. The data is already in the DB, so we can still consider it a partial success.
            error_log("Contact form data saved, but email notification failed. Mailer Error: {$mail->ErrorInfo}");
            // Redirect to a success page, maybe with a note about the email failure.
            header("Location: Contact Us.php?status=success_email_failed");
            exit();
        }
    } else {
        error_log("Database execute failed: " . $stmt->error);
        header("Location: Contact Us.php?status=dberror");
        exit();
    }
}
?>