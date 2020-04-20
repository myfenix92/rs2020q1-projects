import './styles/style.css'
import './styles/style.scss'
import cards from './moduleCards'
import {
  rotate,
  starWin,
  starLose,
} from './moduleConst'

const CONTAINER_CARDS = document.getElementById('container_cards')
const BUTTON = document.querySelector('button')
const NAV_MENU = document.getElementById('nav_menu')
const BURGER_MENU = document.getElementById('burger_menu')
const BURGER_MENU_ICON = document.getElementById('menu_burger_icon')

let imageArr = []
let audioArr = []
let audioArrSort = []
let currentTarget

let errorAnswer = 0
const nameCards = ['Action (set A)', 'Action (set B)', 'Animals (set A)', 'Animals (set B)', 'Clothes', 'Emotions', 'Food', 'Weather']

document.addEventListener('click', (event) => playAudioOnClick(event))
document.addEventListener('click', (event) => changeButtonGame(event))
document.getElementById('switcher').addEventListener('click', (event) => switcher(event))

function init() {
  CONTAINER_CARDS.appendChild(createCards())
  CONTAINER_CARDS.querySelectorAll('.container_card').forEach((itemCard) => {
    itemCard.classList.remove('container_card')
    itemCard.classList.add('card')
  })

  CONTAINER_CARDS.querySelectorAll('span').forEach((itemWord) => {
    itemWord.classList.add('card_word')
  })
  if (document.getElementById('switcher').checked) {
    switcher()
  }
}

function createCards() {
  const fragment = document.createDocumentFragment()
  let numberCards = 0
  const rotateImg = `<svg class="rotateSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill-rule="evenodd"></path></g></svg>`
  for (let i = 0; i < nameCards.length; i++) {
    if (nameCards[i] === event.target.innerHTML || nameCards[i] === event.target.parentElement.innerText) {
      numberCards = i
    }
  }
  let numberAddCard = 0
  const createCard = CONTAINER_CARDS.querySelectorAll('div').forEach((e) => {
    e.innerHTML = `<img class="img_font" src="${cards[numberCards][numberAddCard].image}"><img class="back_img" src="${cards[numberCards][numberAddCard].image}"><br><span class="font">${cards[numberCards][numberAddCard].word}</span><span class="translate_word">${cards[numberCards][numberAddCard].translation}</span>${rotateImg}<audio src="${cards[numberCards][numberAddCard].audioSrc}"></audio>`
    numberAddCard++
  })

  fragment.appendChild(CONTAINER_CARDS.querySelector('div'), createCard)
  return fragment
}

// flip cards

document.querySelectorAll('.container_card').forEach((cardFlip) => {
  cardFlip.addEventListener('click', (event) => {
    if (event.target.tagName === 'svg') {
      event.target.parentElement.classList.add('is-flipped')
    }
  })
})

document.querySelectorAll('.container_card').forEach((cardFlipOut) => {
  cardFlipOut.addEventListener('mouseout', (event) => {
    if (event.target.parentElement.querySelector('.card') === document.querySelector('.card')) {
      CONTAINER_CARDS.querySelectorAll('.card').forEach((itemCardFlip) => {
        itemCardFlip.classList.remove('is-flipped')
      })
    }
  })
})

// open/close menu

function open() {
  NAV_MENU.classList.add('show')
}

function close() {
  NAV_MENU.classList.remove('show')
}

BURGER_MENU_ICON.addEventListener('click', () => {
  BURGER_MENU.classList.toggle('menu_transform')
  NAV_MENU.classList.toggle('show')
})

NAV_MENU.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    init()
    BURGER_MENU.classList.remove('menu_transform')
    close()
    document.querySelector('.stars').innerHTML = ''
    if (document.getElementById('switcher').checked) {
      CONTAINER_CARDS.querySelectorAll('.play').forEach((itemError) => itemError.classList.remove('error'))
      CONTAINER_CARDS.querySelectorAll('.play').forEach((itemCorrect) => itemCorrect.classList.remove('correct'))
      BUTTON.classList.remove('refresh_btn')
      BUTTON.innerHTML = 'Start Game'
      errorAnswer = 0
    }
  }
})

// switcher

function switcher() {
  if (document.getElementById('switcher').checked) {
    CONTAINER_CARDS.querySelectorAll('div').forEach((itemPlay) => itemPlay.classList.add('play'))
    document.querySelectorAll('.card_word').forEach((itemCardWord) => {
      itemCardWord.classList.add('visibility')
    })
    document.querySelectorAll('.rotateSvg').forEach((itemRotate) => {
      itemRotate.classList.add('visibility')
    })
    document.querySelectorAll('.back_img').forEach((itemBackImg) => {
      itemBackImg.classList.add('visibility')
    })
    if (document.getElementsByClassName('container_card').length === 0) {
      BUTTON.classList.add('hidden_btn')
    }
    document.querySelector('nav').classList.add('play')
  } else {
    errorAnswer = 0
    CONTAINER_CARDS.querySelectorAll('.play').forEach((errorPlay) => errorPlay.classList.remove('error'))
    CONTAINER_CARDS.querySelectorAll('.play').forEach((correctPlay) => correctPlay.classList.remove('correct'))
    CONTAINER_CARDS.querySelectorAll('div').forEach((playCard) => playCard.classList.remove('play'))
    document.querySelectorAll('.card_word').forEach((itemWordVisible) => {
      itemWordVisible.classList.remove('visibility')
    })
    document.querySelectorAll('.rotateSvg').forEach((rotateVisible) => {
      rotateVisible.classList.remove('visibility')
    })
    document.querySelectorAll('.back_img').forEach((itemBackImgVisible) => {
      itemBackImgVisible.classList.remove('visibility')
    })
    document.querySelector('nav').classList.remove('play')
    if (BUTTON.innerHTML !== 'Start Game') {
      BUTTON.classList.remove('refresh_btn')
      BUTTON.innerHTML = 'Start Game'
    }
    if (document.getElementsByClassName('container_card').length === 0) {
      BUTTON.classList.remove('hidden_btn')
    }
    document.querySelector('.stars').innerHTML = ''
  }
}

function playAudioOnClick(event) {
  if (event.target.tagName === 'IMG' && !document.getElementById('switcher').checked) {
    document.querySelectorAll('.card').forEach((cardAudioSrc) => {
      if (cardAudioSrc.querySelector('.img_font').src === event.target.src) {
        const audioSrc = new Audio(cardAudioSrc.querySelector('audio').src)
        audioSrc.play()
      }
    })
  }
}

function audioNext() {
  const audioSrc = new Audio(audioArrSort[audioArrSort.length - 1].src)
  audioSrc.play()
}

// button for game

function changeButtonGame(event) {
  if (event.target.tagName === 'BUTTON') {
    if (BUTTON.innerHTML === 'Start Game') {
      BUTTON.classList.add('refresh_btn')
      BUTTON.innerHTML = rotate
      imageArr = []
      audioArr = []
      audioArrSort = []
      imageArr = [...document.getElementById('container_cards').querySelectorAll('.img_font')]
      audioArr = [...document.getElementById('container_cards').querySelectorAll('audio')]
      audioArrSort = [...document.getElementById('container_cards').querySelectorAll('audio')].sort(shuffledArr)
      audioNext()
    } else if (!document.getElementById('switcher').checked) {
      switcher()
    }
  }
}

function shuffledArr() {
  return (Math.random() - 0.5)
}

function game() {
  let numberCorrect = 0
  let numberError = 0
  imageArr.forEach((itemImgArr) => {
    if (currentTarget === itemImgArr.src) {
      numberError = numberCorrect
      if (audioArr[numberCorrect] === audioArrSort[audioArrSort.length - 1]) {
        CONTAINER_CARDS.querySelectorAll('.play')[numberCorrect].classList.add('correct')
        CONTAINER_CARDS.querySelectorAll('.play').forEach((item) => item.classList.remove('error'))
        document.querySelector('.stars').innerHTML = starWin + document.querySelector('.stars').innerHTML
        audioArrSort = audioArrSort.slice(0, audioArrSort.length - 1)
        const audioSrcCorrect = new Audio('audio/correct.mp3')
        audioSrcCorrect.play()
        if (audioArrSort.length === 0) {
          setTimeout(gameEnd, 500)
        } else {
          setTimeout(audioNext, 700)
          numberCorrect = imageArr.length
        }
      }
    }
    if (numberCorrect === imageArr.length - 1 && audioArrSort.length !== 0) {
      document.querySelector('.stars').innerHTML = starLose + document.querySelector('.stars').innerHTML
      const audioSrcError = new Audio('audio/error.mp3')
      errorAnswer++
      CONTAINER_CARDS.querySelectorAll('.play')[numberError].classList.add('error')
      audioSrcError.play()
    }
    numberCorrect++
  })
}

// game start

document.querySelectorAll('.container_card').forEach((itemCardGame) => itemCardGame.addEventListener('click', (event) => {
  if (BUTTON.innerHTML !== 'Start Game') {
    currentTarget = event.target.src
    game()
  }
}))

CONTAINER_CARDS.querySelectorAll('div').forEach((changeCard) => changeCard.addEventListener('click', () => {
  if (!CONTAINER_CARDS.querySelector('div').classList.contains('card')) {
    init()
  }
}))

document.getElementById('refresh').addEventListener('click', () => {
  if (BUTTON.innerHTML !== 'Start Game') {
    audioNext()
  }
})

function gameEnd() {
  const audioSrcFailure = new Audio('audio/failure.mp3')
  const audioSrcSuccess = new Audio('audio/success.mp3')
  document.querySelector('.switcher_container').classList.add('visibility')
  document.querySelector('.stars').innerHTML = ''
  document.querySelector('.container_cards').classList.add('visibility')
  document.querySelector('.btn_game').classList.add('visibility')
  if (errorAnswer === 1) {
    document.querySelector('.container').innerHTML = `<div class="end_game"><span>${errorAnswer} error</span><br><img src="img/failure.jpg" alt="failure"></div>`
    audioSrcFailure.play()
  } else if (errorAnswer > 1) {
    document.querySelector('.container').innerHTML = `<div class="end_game"><span>${errorAnswer} errors</span><br><img src="img/failure.jpg" alt="failure"></div>`
    audioSrcFailure.play()
  } else if (errorAnswer === 0) {
    document.querySelector('.container').innerHTML = `<div class="end_game"><span>Win!</span><br><img src="img/success.jpg" alt="success"></div>`
    audioSrcSuccess.play()
  }
  setTimeout(open, 4000)
}

document.addEventListener('click', (event) => {
  if (event.target.tagName === 'DIV' && event.target.className !== 'menu_icon') {
    BURGER_MENU.classList.remove('menu_transform')
    close()
  }
})
