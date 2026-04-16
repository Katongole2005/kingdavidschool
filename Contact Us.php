<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>King David | Contact Us</title>
    <meta name="description" content="King David Primary and Kindergarten School — nurturing curiosity, empowering young leaders, and building a foundation for lifelong learning." />
    <meta property="og:title" content="King David Primary and Kindergarten School" />
    <meta property="og:description" content="Your child's future starts now. Enrol today." />
    <meta property="og:image" content="assets/images/logo/New Logo.png" />
    <link rel="icon" href="assets/images/logo/New Logo.png" type="image/jpeg" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />

    <!-- Font Awesome – NO integrity attribute (fixes icon issues) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Stylesheets -->
    <link rel="stylesheet" href="assets/css/main.css" />
    <link rel="stylesheet" href="assets/css/contact us.css" />
</head>
<body>

    <!-- Announcement Section (only one, before header) -->
    <div class="announcement" role="region" aria-label="Admission announcement">
        <div class="announcement__inner">
            <span class="announcement__badge">Call Now</span>
            <span class="announcement__text">Get in touch with us!</span>
        </div>
    </div>

    <!-- Header Section -->
    <?php include("includes/header.php"); ?>

    <!-- Breadcrumbs -->
    <div class="breadcrumbs container" style="padding: 1rem 0; font-size: 0.9rem; color: var(--muted);">
        <a href="index.php">Home</a> > <span style="color: var(--brand);">Contact Us</span>
    </div>

    <main id="main">
        <!-- Page Hero -->
        <section class="page-hero">
            <div class="container">
                <span class="hero__badge">
                    <i class="fas fa-envelope" aria-hidden="true"></i>
                    Get in Touch
                </span>
                <h1 style="color: white;">Get in Touch With King David School</h1>
                <p class="subtitle" style="color: gold;">We'd love to hear from you! Please reach out using the details or the form below.</p>
            </div>
        </section>

        <!-- Contact Details and Form -->
        <section class="contact-grid">
            <div class="container grid-layout">
                <!-- Left column -->
                <div class="contact-details">
                    <h2 class="details-title">Visit or Call Us</h2>
                    <p>Our dedicated staff are available to answer your questions and guide you through the enrollment process.</p>

                    <div class="info-block"><h3>School Address:</h3></div>
                    <p>10 Miles off Bombo-Road, Wattuba-Matugga</p>

                    <div class="info-block"><h3>Telephone Contacts:</h3></div>
                    <p><span style="font-weight: 600; color: #505852;">Head Master:</span> +256 775 288 221<br>
                       <span style="font-weight: 600; color: #505852;">Deputy Teacher:</span> +256 703 544 419</p>

                    <div class="info-block"><h3>Email Address:</h3></div>
                    <p><a href="mailto:kdavidsp.school@gmail.com">kdavidsp.school@gmail.com</a></p>

                    <div class="info-block"><h3>Working Hours</h3></div>
                    <p>Monday-Friday: 7:00 AM - 6:00 PM</p>

                    <h2 class="details-title map-title">Find Us (Google Maps)</h2>
                    <div class="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.888764835677!2d32.50204787508491!3d0.48911079949673326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c988a03282b3d%3A0x6b49911964147c20!2sWattuba%2C%20Uganda!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="King David School Location Map"></iframe>
                    </div>
                </div>

                <!-- Right column (form) -->
                <div class="contact-form-wrapper">
                    <h2 class="details-title">Send Us a Quick Message</h2>
                    <form class="contact-form" action="send_contact.php" method="POST">
                        <p class="form-description">Have a question? Send a quick message!</p>

                        <div class="form-group">
                            <label for="name">Your Full Name <span class="required">*</span></label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="Enter your full name" required minlength="3" />
                        </div>

                        <div class="form-group">
                            <label for="email">Email Address <span class="required">*</span></label>
                            <input type="email" id="email" name="email" class="form-control" placeholder="Enter a valid email address" required />
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone Number <span class="required">*</span></label>
                            <input type="tel" id="phone" name="phone" class="form-control" placeholder="E.g., +256 7XX XXX XXX" />
                        </div>

                        <div class="form-group">
                            <label for="subject">Subject <span class="required">*</span></label>
                            <input type="text" id="subject" name="subject" class="form-control" placeholder="Brief subject of your message" />
                        </div>

                        <div class="form-group">
                            <label for="message">Message <span class="required">*</span></label>
                            <textarea id="message" name="message" class="form-control" rows="6" placeholder="Type your detailed message here..." required></textarea>
                        </div>

                        <?php if (isset($_GET['status']) && $_GET['status'] == 'success'): ?>
                            <div style="color: #28a745; background: #e6f4ea; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-weight: 600; text-align: center; border: 1px solid #28a745;">
                                ✅ Success! Your message has been sent.
                            </div>
                        <?php endif; ?>

                        <div class="form-actions">
                            <button type="submit" class="button button--primary btn-send">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <?php include("includes/footer.php"); ?>

    <!-- Scripts -->
    <script src="assets/js/main.js" defer></script>
    <script src="assets/js/Contact us.js" defer></script>
</body>
</html>