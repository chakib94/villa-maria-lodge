(function () {
  const init = () => {
    const toggles = document.querySelectorAll(".mobile-menu-toggle");
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const nav = toggle.closest("nav");
        const menu = nav.querySelector(".mobile-menu");
        if (menu) {
          menu.classList.toggle("hidden");
        }
      });
    });

    const revealElements = document.querySelectorAll("section");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );

    revealElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      revealObserver.observe(el);
    });

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href !== "#") {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
            const nav = document.querySelector("nav");
            const menu = nav.querySelector(".mobile-menu");
            if (menu && !menu.classList.contains("hidden")) {
              menu.classList.add("hidden");
            }
          }
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
