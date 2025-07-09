const offScreenMenu = document.querySelector(".off-screen-menu");
const hambtn = document.querySelector(".ham-btn");
const closebtn = document.querySelector(".close-btn");
const navlinks = document.querySelectorAll(".off-screen-menu ul");

hambtn.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
});
closebtn.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
});

const gallerySlider = document.getElementById("gallerySlider");
const prev = document.getElementById("gallery-prev");
const next = document.getElementById("gallery-next");

const scrollAmount = 320; // adjust based on image width + gap

next.addEventListener("click", () => {
  gallerySlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  gallerySlider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // To allow repeat animation
      }
    });
  },
  {
    threshold: 0.1, // Trigger when 10% of the element is visible
  }
);

// Target all sections
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("animate-on-scroll");
  observer.observe(section);
});
