/**
 * home.js - Homepage Specific JavaScript
 * King David Primary & Kindergarten School
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        initTestimonialSlider();
        initParallaxEffect();
    });

    /**
     * Testimonial Slider
     */
    function initTestimonialSlider() {
        const track = document.getElementById('testimonialTrack');
        const dots = document.querySelectorAll('.testimonials__dots .dot');
        const slides = document.querySelectorAll('.testimonial-card');
        
        if (!track || !slides.length) return;
        
        let currentIndex = 0;
        let slideInterval;
        
        // Function to update slider position
        function goToSlide(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            
            track.style.transform = `translateX(-${index * 100}%)`;
            
            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentIndex = index;
        }
        
        // Add click events to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetInterval();
            });
        });
        
        // Auto play
        function startInterval() {
            slideInterval = setInterval(() => {
                goToSlide(currentIndex + 1);
            }, 6000);
        }
        
        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }
        
        // Start auto play
        startInterval();
        
        // Pause on hover
        track.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        track.addEventListener('mouseleave', () => {
            startInterval();
        });
        
        // Touch support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchEndX - touchStartX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe right - previous slide
                    goToSlide(currentIndex - 1);
                } else {
                    // Swipe left - next slide
                    goToSlide(currentIndex + 1);
                }
                resetInterval();
            }
        }
    }

    /**
     * Count Up Animation
     */
    function animateCount(element, target, duration = 2000) {
        if (!element) return;
        
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

    /**
     * Parallax Effect for Hero
     */
    function initParallaxEffect() {
        const heroImage = document.querySelector('.hero__image');
        const heroContent = document.querySelector('.hero__content');
        
        if (!heroImage || !heroContent) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            
            heroImage.style.transform = `translateY(${rate}px) scale(1.05)`;
            heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
        });
    }

})();