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
