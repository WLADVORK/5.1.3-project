const swiper = new Swiper(".swiper", {
  enabled: true,
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  freeMode: true,
  pagination: {
  el: '.swiper-pagination',
  },
  breakpoints: {
    768: {
      enabled: false, 
      spaceBetween: 24,
    },
  },
});

let brands = document.querySelector('.brands');
let readmore = document.querySelector('.read-more');
let readmoreText = readmore.querySelector('.read-more__text');

readmore.addEventListener('click', function () {
  if (readmoreText.textContent === 'Скрыть') {
    brands.style.height = '160px';
    readmoreText.textContent = 'Показать все';
    readmore.style.marginTop = '24px';
  } else {
    readmoreText.textContent = 'Скрыть';
    brands.style.height = '100%';
    readmore.style.marginTop = '48px';
    };
})
