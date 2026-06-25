// ===== PAGE SWITCH =====

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    // Mobile menu close
    document.getElementById("navMenu").classList.remove("show");
}



// ===== HAMBURGER =====

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}



// ===== VILLA TABS =====

function showVilla(villaId, button) {

    const villas = document.querySelectorAll(".villa-content");

    villas.forEach(villa => {
        villa.classList.remove("active");
    });

    document.getElementById(villaId).classList.add("active");



    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    button.classList.add("active");
}



// ===== IMAGE GALLERY =====

function changeImage(villa, img) {

    document.getElementById(`main-${villa}`).src = img.src;

}
