const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
    clickable: true
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
    // eslint-disable-next-line prettier/prettier
  }
})

const swiperPagination2 = document.querySelector('.swiper-pagination2')
const swiperWrapper = document.querySelector('.swiper-wrapper')
const slides = document.querySelectorAll('.first-slider')
const slides2 = document.querySelectorAll('.second-slider')
const showHidebtn2 = document.querySelector('.showHideBtn2')
const swiperWrapper2 = document.querySelector('.swiper-wrapper2')

if (innerWidth < 768) {
  showHidebtn2.style.display = 'none'
  swiperWrapper2.style.marginLeft = '16px'
}
if (innerWidth >= 768 && innerWidth < 1120) {
  swiper2.destroy()
  swiperWrapper2.style.flexWrap = 'wrap'
  swiperWrapper2.style.gap = '16px 2%'
  swiperPagination2.style.display = 'none'
  for (let i = 0; i < slides2.length; i++) {
    if (i > 2) {
      slides2[i].classList.add('hidden')
    }
  }

  let areElementsShown = true
  // eslint-disable-next-line no-inner-declarations
  function hideElements() {
    slides2.forEach((element) => {
      element.classList.remove('hidden')
    })

    areElementsShown = false
    showHidebtn2.textContent = 'Скрыть все'
    showHidebtn2.classList.add('showHideBtn1')
  }

  // eslint-disable-next-line no-inner-declarations
  function showElements() {
    for (let i = 0; i < slides2.length; i++) {
      if (i > 2) {
        slides2[i].classList.add('hidden')
      }
    }
    areElementsShown = true
    showHidebtn2.textContent = 'Показать все'
    showHidebtn2.classList.remove('showHideBtn1')
  }

  showHidebtn2.addEventListener('click', function () {
    areElementsShown ? hideElements() : showElements()
  })
}
if (innerWidth >= 1120) {
  swiper2.destroy()
  swiperWrapper2.style.flexWrap = 'wrap'
  swiperWrapper2.style.gap = '16px 2%'
  swiperPagination2.style.display = 'none'
  for (let i = 0; i < slides2.length; i++) {
    if (i > 3) {
      slides2[i].classList.add('hidden')
    }
  }
  let areElementsShown = true
  // eslint-disable-next-line no-inner-declarations
  function hideElements() {
    slides2.forEach((element) => {
      element.classList.remove('hidden')
    })
    areElementsShown = false
    showHidebtn2.textContent = 'Скрыть все'
    showHidebtn2.classList.add('showHideBtn1')
  }

  // eslint-disable-next-line no-inner-declarations
  function showElements() {
    for (let i = 0; i < slides2.length; i++) {
      if (i > 3) {
        slides2[i].classList.add('hidden')
      }
    }
    areElementsShown = true
    showHidebtn2.textContent = 'Показать все'
    showHidebtn2.classList.remove('showHideBtn1')
  }

  // eslint-disable-next-line prettier/prettier
  showHidebtn2.addEventListener('click', function () {
    areElementsShown ? hideElements() : showElements()
  })
}
