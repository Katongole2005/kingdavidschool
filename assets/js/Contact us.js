document.addEventListener("DOMContentLoaded", function() {
    // ----- ACTIVE LINK (fallback, but main.js also does this) -----
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav__link").forEach(link => {
        const linkPath = decodeURIComponent(link.getAttribute("href"));
        if (linkPath === currentPath) {
            link.classList.add("is-active");
            link.setAttribute("aria-current", "page");
        }
    });

    // ----- Hide success message after 5 seconds and clean URL -----
    const successMsg = document.querySelector('[style*="color: #28a745"]');
    if (successMsg) {
        setTimeout(() => {
            successMsg.style.display = 'none';
            const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
        }, 5000);
    }
});