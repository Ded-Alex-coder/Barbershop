const swiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: false,
  autoplay: {
    delay: 3000,
  },
  //Скорость
  speed: 500,
  // Количество показанных слайдов
  slidesPerView: 2,
  //Расстояние между слайдами
  spaceBetween: 30,
  //Активный слайд будет по середине
  centeredSlides: false,
  // Номер слайда, с которого начинать показ
  initialSlide: 0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
    disabledClass: 'swiper-button-disabled',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
