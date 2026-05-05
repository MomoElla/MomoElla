const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
function showVilla(id) {
  const contents = document.querySelectorAll(".villa-content");
  const tabs = document.querySelectorAll(".tab");

  contents.forEach(c => c.classList.remove("active"));
  tabs.forEach(t => t.classList.remove("active"));

  document.getElementById(id).classList.add("active");
  event.target.classList.add("active");
}
