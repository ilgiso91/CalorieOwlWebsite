const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach((openItem) => {
            if (openItem !== item) openItem.classList.remove("open");
        });
        item.classList.toggle("open", !isOpen);
    });
});

// Scroll reveal
const revealTargets = document.querySelectorAll(".feature-card, .achievement-card, .story-card, .contact-card");

if (revealTargets.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        { threshold: 0.12 }
    );

    revealTargets.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(18px)";
        element.style.transition = "opacity 0.55s ease, transform 0.55s ease";
        observer.observe(element);
    });

    const style = document.createElement("style");
    style.textContent = `
        .is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}
