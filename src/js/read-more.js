const text1 = document.querySelector('.first-block__article--tablet--text')
const text2 = document.querySelector('.first-block__article--desktop--text')
const text3 = document.querySelector('.first-block__article--desktop--text1')
const readMoreBtn = document.querySelector('.read')

if (innerWidth <= 768) {
  let areTextShown = false

  function hideText() {
    text1.classList.add('hidden')
    text2.classList.add('hidden')
    text3.classList.add('hidden')
    areTextShown = false
    readMoreBtn.textContent = 'Читать далее'
    readMoreBtn.classList.remove('showHideBtn1')
  }
  function showText() {
    text1.classList.remove('hidden')
    text2.classList.remove('hidden')
    text3.classList.remove('hidden')
    areTextShown = true
    readMoreBtn.textContent = 'Скрыть'
    readMoreBtn.classList.add('showHideBtn1')
  }

  readMoreBtn.addEventListener('click', function () {
    areTextShown ? hideText() : showText()
  })
}
if (innerWidth > 768 && innerWidth < 1120) {
  let areTextShown = false
  text1.classList.remove('hidden')
  function hideText() {
    text2.classList.add('hidden')
    text3.classList.add('hidden')
    areTextShown = false
    readMoreBtn.textContent = 'Читать далее'
    readMoreBtn.classList.remove('showHideBtn1')
  }
  function showText() {
    text2.classList.remove('hidden')
    text3.classList.remove('hidden')
    areTextShown = true
    readMoreBtn.textContent = 'Скрыть'
    readMoreBtn.classList.add('showHideBtn1')
  }

  readMoreBtn.addEventListener('click', function () {
    areTextShown ? hideText() : showText()
  })
}

if (innerWidth >= 1120) {
  text2.classList.remove('hidden')
  text1.classList.remove('hidden')
  let areTextShown = false
  text1.classList.remove('hidden')
  function hideText() {
    text3.classList.add('hidden')
    areTextShown = false
    readMoreBtn.textContent = 'Читать далее'
    readMoreBtn.classList.remove('showHideBtn1')
  }
  function showText() {
    text3.classList.remove('hidden')
    areTextShown = true
    readMoreBtn.textContent = 'Скрыть'
    readMoreBtn.classList.add('showHideBtn1')
  }

  readMoreBtn.addEventListener('click', function () {
    areTextShown ? hideText() : showText()
  })
}
