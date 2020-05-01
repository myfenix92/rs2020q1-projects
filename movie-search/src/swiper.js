const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerColumnFill: 'row',
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

export default function createSlide() {
  for (let i = 0; i < 10; i += 1) {
    mySwiper.appendSlide('<div class="swiper-slide"></div>')
  }
}
