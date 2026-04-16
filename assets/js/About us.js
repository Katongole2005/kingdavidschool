document.addEventListener("DOMContentLoaded", function() {
    // ----- ACTIVE LINK (already in main.js, but kept for safety) -----
    const currentPath = window.location.pathname.split("/").pop() || "index.php";
    document.querySelectorAll(".nav__link").forEach(link => {
        const linkPath = decodeURIComponent(link.getAttribute("href"));
        if (linkPath === currentPath) {
            link.classList.add("is-active");
            link.setAttribute("aria-current", "page");
        }
    });

    // ----- SCROLL REVEAL for hexagons and timeline -----
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".hex-item").forEach(el => observer.observe(el));
    document.querySelectorAll(".tree-timeline__item").forEach(el => observer.observe(el));

    // ----- FALLBACK: Show everything after 1 second if observer fails -----
    setTimeout(() => {
        document.querySelectorAll(".hex-item, .tree-timeline__item").forEach(el => {
            el.classList.add("visible");
        });
    }, 1000);

    // ----- COUNT-UP ANIMATION -----
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.hasAttribute("data-count-to")) {
                animateValue(entry.target);
                countObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll("[data-count-to]").forEach(el => countObserver.observe(el));

    function animateValue(element) {
        const target = parseInt(element.getAttribute("data-count-to"), 10);
        if (isNaN(target)) return;
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 20);
    }
});