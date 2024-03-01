const openMenuBtn = document.querySelector(
  '.header__menu-and-cps-block--button--menu'
)
const closeMenuBtn = document.querySelector(
  '.menu-header__left-block--close-button'
)
const menu = document.querySelector('.menu')
const background = document.querySelector('.background')
const body = document.querySelector('.body')
const call = document.querySelector('.mod-call')
const closeCallBtn = document.querySelector('.mod-call__close-button')
const openCallBtn = document.querySelector('.footer__phone--button')
const openCallBtn1 = document.querySelector(
  '.header__repair-and-search-block--button--repair'
)
const openCallBtn2 = document.querySelector(
  '.header__tablet-block--buttons--phone'
)
const openFeedbackBtn = document.querySelector('.footer__message--button')
const feedback = document.querySelector('.mod-feedback')
const closeFeedbackBtn = document.querySelector('.mod-feedback__close-button')
const openFeedbackBtn2 = document.querySelector(
  '.header__tablet-block--buttons--message'
)
openMenuBtn.addEventListener('click', function () {
  menu.classList.add('menu-active')
  background.style.display = 'block'
  body.style.overflowY = 'hidden'
})
closeMenuBtn.addEventListener('click', function () {
  menu.classList.remove('menu-active')
  background.style.display = 'none'
  body.style.overflow = 'scroll'
  if (call.classList.contains('mod-call-active')) {
    background.style.display = 'block'
    body.style.overflowY = 'hidden'
  }
  if (feedback.classList.contains('mod-feedback-active')) {
    background.style.display = 'block'
    body.style.overflowY = 'hidden'
  }
})

openCallBtn.addEventListener('click', function () {
  call.classList.add('mod-call-active')
  body.style.overflowY = 'hidden'
  feedback.classList.remove('mod-feedback-active')
  background.style.display = 'block'
})
openCallBtn1.addEventListener('click', function () {
  menu.classList.remove('menu-active')
  call.classList.add('mod-call-active')
  body.style.overflowY = 'hidden'
  background.style.display = 'block'
  feedback.classList.remove('mod-feedback-active')
})
closeCallBtn.addEventListener('click', function () {
  call.classList.remove('mod-call-active')
  body.style.overflow = 'scroll'
  background.style.display = 'none'
  if (menu.classList.contains('menu-active')) {
    background.style.display = 'block'
  }
})

openCallBtn2.addEventListener('click', function () {
  call.classList.add('mod-call-active')
  feedback.classList.remove('mod-feedback-active')
  body.style.overflowY = 'hidden'
  background.style.display = 'block'
})

openFeedbackBtn.addEventListener('click', function () {
  feedback.classList.add('mod-feedback-active')
  call.classList.remove('mod-call-active')
  body.style.overflowY = 'hidden'
  background.style.display = 'block'
})
openFeedbackBtn2.addEventListener('click', function () {
  feedback.classList.add('mod-feedback-active')
  call.classList.remove('mod-call-active')
  body.style.overflowY = 'hidden'
  background.style.display = 'block'
})
closeFeedbackBtn.addEventListener('click', function () {
  feedback.classList.remove('mod-feedback-active')
  body.style.overflow = 'scroll'
  background.style.display = 'none'
  if (menu.classList.contains('menu-active')) {
    background.style.display = 'block'
  }
})
