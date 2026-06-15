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
  
document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
document.getElementById(pageId).classList.add("active");

  // ナビ更新
  document.querySelectorAll(".nav a").forEach(a => {
    a.classList.remove("active");
  });

  const activeLink = document.querySelector(`.nav a[onclick="showPage('${pageId}')"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
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
// ===== modal =====
function openImage(src) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <img src="${src}">
  `;

  modal.onclick = () => modal.remove();

  document.body.appendChild(modal);
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
