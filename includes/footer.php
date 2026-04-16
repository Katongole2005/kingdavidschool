<?php
/**
 * Footer Component
 * King David Primary & Kindergarten School
 */
?>
<footer class="site-footer">
    <div class="container">
        <!-- Main Footer Grid -->
        <div class="footer__grid">
            <!-- Brand Column -->
            <div class="footer__col footer__brand">
                <img src="assets/images/logo/New Logo.png" 
                     alt="King David School Logo" 
                     class="footer__logo"
                     width="150"
                     height="150"
                     loading="lazy">
                <p class="footer__tagline">
                    Nurturing curiosity, empowering young leaders, and building a foundation for lifelong learning.
                </p>
                <div class="footer__social">
                    <a href="https://www.facebook.com/@king.david.school" class="social__link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.tiktok.com/@king.david.school" class="social__link" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <i class="fab fa-tiktok"></i>
                    </a>
                    <a href="https://www.instagram.com/@king.david.school" class="social__link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/@king.david.school" class="social__link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>

            <!-- Quick Links Column -->
            <div class="footer__col">
                <h3 class="footer__title">Quick Links</h3>
                <ul class="footer__list">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="About Us.php">About Us</a></li>
                    <li><a href="Gallery.php">Gallery</a></li>
                    <li><a href="Contact Us.php">Contact</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </ul>
            </div>

            <!-- Contact Info Column -->
            <div class="footer__col">
                <h3 class="footer__title">Contact Info</h3>
                <ul class="footer__list footer__list--contact">
                    <li>
                        <i class="fas fa-map-marker-alt"></i>
                        <span>10 Miles off Bombo Road, Wattuba–Matugga</span>
                    </li>
                    <li>
                        <i class="fas fa-phone-alt"></i>
                        <span>
                            <a href="tel:+256774945178">+256 774 945 178</a><br>
                            <a href="tel:+256754517047">+256 754 517 047</a>
                        </span>
                    </li>
                    <li>
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:kdavidsp.school@gmail.com">kdavidsp.school@gmail.com</a>
                    </li>
                </ul>
            </div>

            <!-- Newsletter Column -->
            <div class="footer__col">
                <h3 class="footer__title">Post-Office Box</h3>
                <p class="footer__newsletter-text">P.O.BOX 115343, Wakiso</p>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer__bottom">
            <p class="footer__copyright">
                &copy; <?php echo date('Y'); ?> King David Primary & Kindergarten School. All rights reserved.
            </p>
            <ul class="footer__legal">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
            </ul>
        </div>
    </div>
</footer>