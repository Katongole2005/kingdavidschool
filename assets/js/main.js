/**
 * main.js - Core JavaScript for King David School Website
 * Handles navigation, animations, and common functionality
 */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initScrollEffects();
        initRevealAnimations();
        initSmoothScroll();
        initActiveLink();
        initLazyLoading();
    });

    /**
     * Mobile Menu Toggle
     * Handles the hamburger menu with proper ARIA attributes
     */
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const icon = navToggle?.querySelector('i');

    if (!navToggle || !navMenu) return;

    // Helper: get total height of announcement + header
    function getTopOffset() {
        const announcement = document.querySelector('.announcement');
        const header = document.querySelector('.site-header');
        let offset = 0;
        if (announcement) offset += announcement.offsetHeight;
        if (header) offset += header.offsetHeight;
        return offset;
    }

    // Function to open the menu
    function openMenu() {
        const topOffset = getTopOffset();
        navMenu.style.top = topOffset + 'px';
        navMenu.style.maxHeight = 'calc(100vh - ' + topOffset + 'px)';
        navMenu.classList.add('is-open');
        navToggle.setAttribute('aria-expanded', 'true');
        if (icon) icon.className = 'fas fa-times';
        document.body.style.overflow = 'hidden';
    }

    // Function to close the menu
    function closeMenu() {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        if (icon) icon.className = 'fas fa-bars';
        document.body.style.overflow = '';
        // Reset inline styles so CSS defaults can take over if needed
        navMenu.style.top = '';
        navMenu.style.maxHeight = '';
    }

    // Toggle on button click
    navToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (navMenu.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            if (navMenu.classList.contains('is-open')) closeMenu();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
            closeMenu();
        }
    });

    // Close when a menu link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Recalculate position if window is resized while menu is open
    window.addEventListener('resize', function() {
        if (navMenu.classList.contains('is-open')) {
            const topOffset = getTopOffset();
            navMenu.style.top = topOffset + 'px';
            navMenu.style.maxHeight = 'calc(100vh - ' + topOffset + 'px)';
        }
    });
}

    /**
     * Scroll Effects
     * Header shrink on scroll, back to top button
     */
    function initScrollEffects() {
        const header = document.querySelector('.site-header');
        let lastScroll = 0;

        if (!header) return;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add/remove scrolled class
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Hide/show header on scroll direction (optional)
            if (currentScroll > lastScroll && currentScroll > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        });
    }

    /**
     * Reveal Animations on Scroll
     * Uses Intersection Observer for performance
     */
    function initRevealAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: unobserve after animation
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Elements to animate
        const revealElements = document.querySelectorAll(
            '.card, .stat-card, .gallery-item, .timeline-item, ' +
            '.mv-card, .team-card, .event-card, .quote'
        );

        revealElements.forEach(el => {
            el.classList.add('reveal');
            revealObserver.observe(el);
        });
    }

    /**
     * Smooth Scroll for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;
                
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Active Link Highlighting
     * Additional check for current page
     */
    function initActiveLink() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.php';
        
        document.querySelectorAll('.nav__link').forEach(link => {
            const linkPath = link.getAttribute('href');
            
            if (linkPath === currentPath) {
                link.classList.add('is-active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    /**
     * Lazy Loading Images
     * Uses native lazy loading with fallback
     */
    function initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports native lazy loading
            document.querySelectorAll('img[loading="lazy"]').forEach(img => {
                img.src = img.dataset.src || img.src;
            });
        } else {
            // Fallback for older browsers
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    /**
     * Count Up Animation for Statistics
     * @param {HTMLElement} element - The element containing the number
     * @param {number} target - Target number to count to
     * @param {number} duration - Animation duration in ms
     */
    window.animateCount = function(element, target, duration = 2000) {
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
    };

    /**
     * Initialize Counters when in view
     */
    function initCounters() {
        const counters = document.querySelectorAll('[data-count-to]');
        
        if (!counters.length) return;
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.countTo, 10);
                    
                    if (!isNaN(target)) {
                        animateCount(counter, target);
                        counterObserver.unobserve(counter);
                    }
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // Initialize counters separately
    initCounters();

})();