const swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination3',
    clickable: true
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
    // eslint-disable-next-line prettier/prettier
  }
})

const swiperPagination3 = document.querySelector('.swiper-pagination3')
const slides3 = document.querySelectorAll('.third-slider')
const swiperWrapper3 = document.querySelector('.swiper-wrapper3')

if (innerWidth < 768) {
  swiperWrapper3.style.marginLeft = '16px'
}
if (innerWidth >= 768 && innerWidth < 1120) {
  swiper3.destroy()
  swiperWrapper3.style.flexWrap = 'wrap'
  swiperPagination3.style.display = 'none'
}
if (innerWidth >= 1120) {
  swiper3.destroy()
  swiperPagination3.style.display = 'none'
}
