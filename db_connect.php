<?php
// It's highly recommended to use environment variables for database credentials
// instead of hardcoding them in the source code.
// For a local XAMPP setup, you can use a library like `vlucas/phpdotenv`
// or configure them in your Apache virtual host.
// Example using getenv():
// DB_HOST=127.0.0.1
// DB_USER=root
// DB_PASS=your_password
// DB_NAME=contact_db
// DB_PORT=3307

$servername = getenv('DB_HOST') ?: '127.0.0.1';
$username   = getenv('DB_USER') ?: 'root';
$password   = getenv('DB_PASS') ?: ''; // Fallback to empty password for local dev, but ideally set in .env
$dbname     = getenv('DB_NAME') ?: 'contact_db';
$port       = getenv('DB_PORT') ?: 3307;

$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>