function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
}

document.getElementById("mobile-menu-button").addEventListener("click", toggleMenu);
document.getElementById("close-menu").addEventListener("click", toggleMenu);


document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1, // Default: 1 slide (Mobile)
      spaceBetween: 10, // Small gap
      loop: true, // Infinite looping
      autoplay: {
        delay: 2500, // Auto-slide every 2.5s
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2, // 2 slides on Tablets (≥640px)
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });