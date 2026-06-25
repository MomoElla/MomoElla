// ===== HAMBURGER =====

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}


// メニューを押したら自動で閉じる

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("show");
  });
});


// ===== VILLA TABS =====

function showVilla(villaId, button) {

  document.querySelectorAll(".villa-content").forEach(villa => {
    villa.classList.remove("active");
  });

  document.getElementById(villaId).classList.add("active");


  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  button.classList.add("active");
}


// ===== IMAGE CHANGE =====

function changeImage(villa, image) {
  document.getElementById(`main-${villa}`).src = image.src;
}
