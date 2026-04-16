<?php
/**
 * Header Component
 */
?>
<header class="site-header" id="site-header">
    <div class="container">
        <!-- Logo -->
        <a href="index.php" class="brand" aria-label="King David School - Home">
            <img src="assets/images/logo/New Logo.png" 
                 alt="King David School Logo" 
                 class="brand__logo"
                 width="55" 
                 height="55"
                 loading="eager">
            <div class="brand__text">
                <span class="brand__title">King David</span>
                <span class="brand__subtitle">Primary & Kindergarten</span>
            </div>
        </a>

        <!-- Mobile Menu Toggle -->
        <button class="nav__toggle" 
                id="navToggle" 
                aria-expanded="false" 
                aria-label="Toggle navigation menu"
                aria-controls="navMenu">
            <i class="fas fa-bars" aria-hidden="true"></i>
        </button>

        <!-- Navigation Menu -->
        <nav class="nav" aria-label="Main navigation">
            <ul class="nav__list" id="navMenu">
                <li class="nav__item">
                    <a href="index.php" 
                       class="nav__link <?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? 'is-active' : ''; ?>">
                        <i class="fas fa-home" aria-hidden="true"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="About Us.php" 
                       class="nav__link <?php echo (basename($_SERVER['PHP_SELF']) == 'About Us.php') ? 'is-active' : ''; ?>">
                        <i class="fas fa-info-circle" aria-hidden="true"></i>
                        <span>About Us</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="Gallery.php" 
                       class="nav__link <?php echo (basename($_SERVER['PHP_SELF']) == 'Gallery.php') ? 'is-active' : ''; ?>">
                        <i class="fas fa-images" aria-hidden="true"></i>
                        <span>Gallery</span>
                    </a>
                </li>
                <li class="nav__item">
                    <a href="Contact Us.php" 
                       class="nav__link <?php echo (basename($_SERVER['PHP_SELF']) == 'Contact Us.php') ? 'is-active' : ''; ?>">
                        <i class="fas fa-envelope" aria-hidden="true"></i>
                        <span>Contact</span>
                    </a>
                </li>
                <li class="nav__item nav__cta">
                    <a href="Contact Us.php" class="button button--primary button--sm">
                        <i class="fas fa-graduation-cap" aria-hidden="true"></i>
                        <span>Enroll Now</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>
<!-- REMOVED THE SECOND ANNOUNCEMENT BLOCK -->
 <!-- Announcement (if needed) -->
<div class="announcement" role="region" aria-label="Announcements">
    <div class="container">
        <div class="announcement__inner">
            <span class="announcement__badge">
                <i class="fas fa-star" aria-hidden="true"></i> NEW
            </span>
            <span class="announcement__text">
                🎓 Registration Open for 2026 - Limited Spaces Available!
            </span>
            <a href="Contact Us.php" class="announcement__cta">
                Apply Now <i class="fas fa-arrow-right" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</div>