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

const villaImages = {

  standard:[
    "images/Standard/stn1.jpg",
    "images/Standard/stn10.jpg",
    "images/Standard/stn11.jpg",
    "images/Standard/stn9.jpg",
    "images/Standard/stn4.jpg",
    "images/Standard/stn3.jpg",
    "images/Standard/stn8.jpg"
  ],

  deluxe:[
    "images/Deluxe/DX13.jpg",
    "images/Deluxe/DX12.jpg",
    "images/Deluxe/DX4.jpg",
    "images/Deluxe/DX14.jpg",
    "images/Deluxe/DX3.jpg",
    "images/Deluxe/DX2.jpg",
    "images/Deluxe/DX7.jpg"
  ],


  "luxury-sol":[
    "images/LuxurySOL/sol3.jpg",
    "images/LuxurySOL/sol12.jpg",
    "images/LuxurySOL/sol8.jpg",
    "images/LuxurySOL/sol18.jpg",
    "images/LuxurySOL/sol16.jpg",
    "images/LuxurySOL/sol14.jpg",
    "images/LuxurySOL/sol17.jpg"
  ],

  "luxury-luna":[

  "images/Hero/Hero11.jpg",
  "images/LuxuryLUNA/luna10.jpg",
  "images/LuxuryLUNA/luna12.jpg",
  "images/LuxuryLUNA/luna15.jpg",
  "images/LuxuryLUNA/luna14.jpg",
  "images/LuxuryLUNA/luna8.jpg",
  "images/LuxuryLUNA/luna7.jpg"

]

};



let currentIndex = {
  standard:0,

  deluxe:0,

  "luxury-sol":0,

  "luxury-luna":0
};


function nextImage(villa){

  currentIndex[villa]++;

  if(currentIndex[villa] >= villaImages[villa].length){
    currentIndex[villa]=0;
  }

  document.getElementById("main-"+villa).src =
  villaImages[villa][currentIndex[villa]];

}



function prevImage(villa){

  currentIndex[villa]--;

  if(currentIndex[villa] < 0){
    currentIndex[villa]=villaImages[villa].length-1;
  }

  document.getElementById("main-"+villa).src =
  villaImages[villa][currentIndex[villa]];

}

// ===== Booking avilability check =====

function sendWhatsApp(){

  const villa = document.getElementById("villa").value;
  const arrival = document.getElementById("arrival").value;
  const nights = document.getElementById("nights").value;
  const guests = document.getElementById("guests").value;


  const message = 
  `Hello, I'd love to plan a stay at ${villa} from ${arrival} for ${nights} nights (${guests} guests). Are dates available?`;


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
