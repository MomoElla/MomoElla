// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}


// ===== PAGE SWITCH (NEW) =====
function showPage(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}


// ===== VILLA TABS =====
function showVilla(id, el) {

  const contents = document.querySelectorAll(".villa-content");
  const tabs = document.querySelectorAll(".tab");

  contents.forEach(c => c.classList.remove("active"));
  tabs.forEach(t => t.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  if (el) {
    el.classList.add("active");
  }
}


// ===== IMAGE SWITCH =====
function changeImage(villa, el) {
  const main = document.getElementById("main-" + villa);
  if (main) {
    main.src = el.src;
  }
}


// ===== SCROLL FADE =====
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    const rect = el.getBoundingClientRect().top;

    if (rect < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
