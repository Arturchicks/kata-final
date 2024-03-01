/* eslint-disable prettier/prettier */
const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination1',
    clickable: true
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
    // eslint-disable-next-line prettier/prettier
  }
})

const swiperPagination1 = document.querySelector('.swiper-pagination1')
const swiperPagination2 = document.querySelector('.swiper-pagination2')
const swiperWrapper = document.querySelector('.swiper-wrapper')
const slides = document.querySelectorAll('.first-slider')
const slides2 = document.querySelectorAll('.second-slider')
const showHideBtn = document.querySelector('.showHideBtn')
const swiperWrapper2 = document.querySelector('.swiper-wrapper2')

if (innerWidth < 768) {
  showHideBtn.style.display = 'none'
  swiperWrapper.style.marginLeft = '16px'
}
if (innerWidth >= 768 && innerWidth < 1120) {
  swiper1.destroy()
  swiperWrapper.style.flexWrap = 'wrap'
  swiperWrapper.style.gap = '16px 2%'
  swiperPagination1.style.display = 'none'
  for (let i = 0; i < slides.length; i++) {
    if (i > 5) {
      slides[i].classList.add('hidden')
    }
  }

  let areElementsShown = true
  // eslint-disable-next-line no-inner-declarations
  function hideElements() {
    slides.forEach((element) => {
      element.classList.remove('hidden')
    })

    areElementsShown = false
    showHideBtn.textContent = 'Скрыть все'
    showHideBtn.classList.add('showHideBtn1')
  }

  // eslint-disable-next-line no-inner-declarations
  function showElements() {
    for (let i = 0; i < slides.length; i++) {
      if (i > 5) {
        slides[i].classList.add('hidden')
      }
    }
    areElementsShown = true
    showHideBtn.textContent = 'Показать все'
    showHideBtn.classList.remove('showHideBtn1')
  }

  showHideBtn.addEventListener('click', function () {
    areElementsShown ? hideElements() : showElements()
  })
}
if (innerWidth >= 1120) {
  swiper1.destroy()
  swiperWrapper.style.flexWrap = 'wrap'
  swiperWrapper.style.gap = '16px 2%'
  swiperPagination1.style.display = 'none'
  for (let i = 0; i < slides.length; i++) {
    if (i > 7) {
      slides[i].classList.add('hidden')
    }
  }
  let areElementsShown = true
  // eslint-disable-next-line no-inner-declarations
  function hideElements() {
    slides.forEach((element) => {
      element.classList.remove('hidden')
    })
    areElementsShown = false
    showHideBtn.textContent = 'Скрыть все'
    showHideBtn.classList.add('showHideBtn1')
  }

  // eslint-disable-next-line no-inner-declarations
  function showElements() {
    for (let i = 0; i < slides.length; i++) {
      if (i > 7) {
        slides[i].classList.add('hidden')
      }
    }
    areElementsShown = true
    showHideBtn.textContent = 'Показать все'
    showHideBtn.classList.remove('showHideBtn1')
  }

  // eslint-disable-next-line prettier/prettier
  showHideBtn.addEventListener('click', function () {
    areElementsShown ? hideElements() : showElements()
  })
}
