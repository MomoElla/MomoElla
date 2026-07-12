// ===== HAMBURGER =====

function toggleMenu() {
  const nav = document.getElementById("navMenu");
  if (!nav) return;

  nav.classList.toggle("show");
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


// ===== Hero IMAGE CHANGE =====

function changeImage(villa, image) {
  document.getElementById(`main-${villa}`).src = image.src;
}

const images = document.querySelectorAll(".hero-img");

let current = 0;


setInterval(() => {

  images[current].classList.remove("active");

  current++;

  if (current >= images.length) {
    current = 0;
  }

  images[current].classList.add("active");

}, 4000);

// ===== Booking avilability check =====

function sendWhatsApp(){

  const villa = document.getElementById("villa").value;
  const arrival = document.getElementById("arrival").value;
  const nights = document.getElementById("nights").value;
  const guests = document.getElementById("guests").value;


  const message = 
  `Hello, I'd love to book ${villa} from ${arrival} for ${nights} nights (${guests} guests). Are dates available?`;


  const phone = "94771238820";


  const url = 
  `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;


  window.open(url, "_blank");

}
function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
