const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".top-menu a");

/* Reveal animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

/* FIXED NAV BEHAVIOR */
let isClickScrolling = false;

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    isClickScrolling = true;

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    setTimeout(() => {
      isClickScrolling = false;
    }, 700); // matches scroll duration
  });
});

window.addEventListener("scroll", () => {
  if (isClickScrolling) return;

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});