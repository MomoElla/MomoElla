const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

function showVilla(id, el) {
  const contents = document.querySelectorAll(".villa-content");
  const tabs = document.querySelectorAll(".tab");

  contents.forEach(c => c.classList.remove("active"));
  tabs.forEach(t => t.classList.remove("active"));

  document.getElementById(id).classList.add("active");
  el.classList.add("active");
}

function changeImage(villa, el) {
  const main = document.getElementById("mainImage-" + villa);
  main.src = el.src;
}
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
