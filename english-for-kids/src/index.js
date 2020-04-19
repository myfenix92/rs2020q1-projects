import './styles/style.css'
import './styles/style.scss'
import cards from './moduleCards'

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
  CONTAINER_CARDS.querySelector('div').append(createCards())
  document.querySelectorAll('.container_card').forEach((e) => {
    e.classList.remove('container_card')
    e.classList.add('card')
  })
  CONTAINER_CARDS.querySelectorAll('span').forEach((e) => {
    e.classList.add('card_word')
  })
  if (document.getElementById('switcher').checked) {
    switcher()
  }
}

function createCards(event) {
  const fragment = document.createDocumentFragment()
  let numberCards = 0
  const rotateImg = `<svg class="rotateSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill-rule="evenodd"></path></g></svg>`
  for (let i = 0; i < nameCards.length; i++) {
    if (nameCards[i] === event.target.innerHTML || nameCards[i] === event.target.innerText) {
      numberCards = i
    }
  }
  let numberAddCard = 0
  const createCard = CONTAINER_CARDS.querySelectorAll('div').forEach((e) => {
    e.innerHTML = `<img src="${cards[numberCards][numberAddCard].image}"><br><span>${cards[numberCards][numberAddCard].word}${rotateImg}</span><span class="translate_word">${cards[numberCards][numberAddCard].translation}${rotateImg}</span><audio src="${cards[numberCards][numberAddCard].audioSrc}"></audio>`
    numberAddCard++
  })

  fragment.append(createCard)
  return fragment
}

function open() {
  NAV_MENU.classList.toggle('show')
}

BURGER_MENU_ICON.addEventListener('click', () => {
  BURGER_MENU.classList.toggle('menu_transform')
  open()
})

NAV_MENU.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    open()
    init()
    BURGER_MENU.classList.toggle('menu_transform')
    document.querySelector('.stars').innerHTML = ''
    if (document.getElementById('switcher').checked) {
      CONTAINER_CARDS.querySelectorAll('.play').forEach((e) => e.classList.remove('error'))
      CONTAINER_CARDS.querySelectorAll('.play').forEach((e) => e.classList.remove('correct'))
      BUTTON.classList.remove('refresh_btn')
      BUTTON.innerHTML = 'Start Game'
      errorAnswer = 0
    }
  }
})

function switcher() {
  if (document.getElementById('switcher').checked) {
    CONTAINER_CARDS.querySelectorAll('div').forEach((e) => e.classList.add('play'))
    document.querySelectorAll('.card_word').forEach((e) => {
      e.classList.add('card_word_hidden')
    })
    document.querySelectorAll('.rotateSvg').forEach((e) => {
      e.classList.add('card_word_hidden')
    })
    if (document.getElementsByClassName('container_card').length === 0) {
      BUTTON.classList.add('hidden_btn')
    }
    document.querySelector('nav').classList.add('play')
  } else {
    errorAnswer = 0
    CONTAINER_CARDS.querySelectorAll('.play').forEach((e) => e.classList.remove('error'))
    CONTAINER_CARDS.querySelectorAll('.play').forEach((e) => e.classList.remove('correct'))
    CONTAINER_CARDS.querySelectorAll('div').forEach((e) => e.classList.remove('play'))
    document.querySelectorAll('.card_word').forEach((e) => {
      e.classList.remove('card_word_hidden')
    })
    document.querySelectorAll('.rotateSvg').forEach((e) => {
      e.classList.remove('card_word_hidden')
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
    document.querySelectorAll('.card').forEach((e) => {
      if (e.querySelector('img').src === event.target.src) {
        const audioSrc = new Audio(e.querySelector('audio').src)
        audioSrc.play()
      }
    })
  }
}

const rotate = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 341.333 341.333" style="enable-background:new 0 0 341.333 341.333;" xml:space="preserve" width="30px" height="30px">
<g>
<g>
 <path d="M341.227,149.333V0l-50.133,50.133C260.267,19.2,217.707,0,170.56,0C76.267,0,0.107,76.373,0.107,170.667
   s76.16,170.667,170.453,170.667c79.467,0,146.027-54.4,164.907-128h-44.373c-17.6,49.707-64.747,85.333-120.533,85.333
   c-70.72,0-128-57.28-128-128s57.28-128,128-128c35.307,0,66.987,14.72,90.133,37.867l-68.8,68.8H341.227z"/>
</g>
</g>
</svg>`

function audioNext() {
  const audioSrc = new Audio(audioArrSort[audioArrSort.length - 1].src)
  audioSrc.play()
}

function changeButtonGame(event) {
  if (event.target.tagName === 'BUTTON') {
    if (BUTTON.innerHTML === 'Start Game') {
      BUTTON.classList.add('refresh_btn')
      BUTTON.innerHTML = rotate
      imageArr = []
      audioArr = []
      audioArrSort = []
      imageArr = [...document.getElementById('container_cards').querySelectorAll('img')]
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
  imageArr.forEach((e) => {
    if (currentTarget === e.src) {
      numberError = numberCorrect
      if (audioArr[numberCorrect] === audioArrSort[audioArrSort.length - 1]) {
        CONTAINER_CARDS.querySelectorAll('.play')[numberCorrect].classList.add('correct')
        CONTAINER_CARDS.querySelectorAll('.play').forEach((item) => item.classList.remove('error'))
        document.querySelector('.stars').innerHTML = starWin + document.querySelector('.stars').innerHTML
        audioArrSort = audioArrSort.slice(0, audioArrSort.length - 1)
        const audioSrcCorrect = new Audio('./assets/audio/correct.mp3')
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
      const audioSrcError = new Audio('./assets/audio/error.mp3')
      errorAnswer++
      CONTAINER_CARDS.querySelectorAll('.play')[numberError].classList.add('error')
      audioSrcError.play()
    }
    numberCorrect++
  })
}

document.querySelectorAll('.container_card').forEach((e) => e.addEventListener('click', (event) => {
  if (BUTTON.innerHTML !== 'Start Game') {
    currentTarget = event.target.src
    game()
  }
}))

CONTAINER_CARDS.querySelectorAll('div').forEach((e) => e.addEventListener('click', () => {
  if (!CONTAINER_CARDS.querySelector('div').classList.contains('card')) {
    init()
  }
}))

document.getElementById('refresh').addEventListener('click', () => {
  if (BUTTON.innerHTML !== 'Start Game') {
    audioNext()
  }
})

const starWin = `<svg class="star_win"
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:cc="http://web.resource.org/cc/"
xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
xmlns:svg="http://www.w3.org/2000/svg"
xmlns="http://www.w3.org/2000/svg"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
width="64"
height="64"
id="svg2"
sodipodi:version="0.32"
inkscape:version="0.44"
version="1.0"
sodipodi:docbase="C:\Documents and Settings\Kris\My Documents\My Pictures\Wikipedia"
sodipodi:docname="Empty Star.svg">
<defs
  id="defs4" />
<sodipodi:namedview
  id="base"
  pagecolor="#ffffff"
  bordercolor="#666666"
  borderopacity="1.0"
  gridtolerance="10000"
  guidetolerance="10"
  objecttolerance="10"
  inkscape:pageopacity="0.0"
  inkscape:pageshadow="2"
  inkscape:zoom="3.4678899"
  inkscape:cx="49.5"
  inkscape:cy="21.5"
  inkscape:document-units="px"
  inkscape:current-layer="layer1"
  width="64px"
  height="64px"
  showgrid="true"
  gridspacingx="2px"
  gridspacingy="2px"
  gridempspacing="4"
  inkscape:window-width="847"
  inkscape:window-height="582"
  inkscape:window-x="133"
  inkscape:window-y="72" />
<metadata
  id="metadata7">
 <rdf:RDF>
   <cc:Work
      rdf:about="">
     <dc:format>image/svg+xml</dc:format>
     <dc:type
        rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
   </cc:Work>
 </rdf:RDF>
</metadata>
<g
  inkscape:label="Layer 1"
  inkscape:groupmode="layer"
  id="layer1">
 <path
    sodipodi:type="star"
    style="fill:#ffd86f;fill-opacity:1;stroke:#ffd86f;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
    id="path3651"
    sodipodi:sides="5"
    sodipodi:cx="31.934996"
    sodipodi:cy="32.065002"
    sodipodi:r1="24.493324"
    sodipodi:r2="10.409663"
    sodipodi:arg1="0.9442689"
    sodipodi:arg2="1.5725874"
    inkscape:flatsided="false"
    inkscape:rounded="2.4286129e-017"
    inkscape:randomized="0"
    d="M 46.296296,51.906272 L 31.916351,42.474649 L 17.502712,51.8547 L 22.029072,35.264028 L 8.654054,24.454438 L 25.831443,23.632463 L 31.978866,7.5717174 L 38.068716,23.65438 L 55.243051,24.537884 L 41.829396,35.299492 L 46.296296,51.906272 z "
    transform="matrix(0.986858,0,0,1.03704,0.471316,1.159472)" />
</g>
</svg>`

const starLose = `<svg class="star_lose"
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:cc="http://web.resource.org/cc/"
xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
xmlns:svg="http://www.w3.org/2000/svg"
xmlns="http://www.w3.org/2000/svg"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
width="64"
height="64"
id="svg2"
sodipodi:version="0.32"
inkscape:version="0.44"
version="1.0"
sodipodi:docbase="C:\Documents and Settings\Kris\My Documents\My Pictures\Wikipedia"
sodipodi:docname="Empty Star.svg">
<defs
  id="defs4" />
<sodipodi:namedview
  id="base"
  pagecolor="#ffffff"
  bordercolor="#666666"
  borderopacity="1.0"
  gridtolerance="10000"
  guidetolerance="10"
  objecttolerance="10"
  inkscape:pageopacity="0.0"
  inkscape:pageshadow="2"
  inkscape:zoom="3.4678899"
  inkscape:cx="49.5"
  inkscape:cy="21.5"
  inkscape:document-units="px"
  inkscape:current-layer="layer1"
  width="64px"
  height="64px"
  showgrid="true"
  gridspacingx="2px"
  gridspacingy="2px"
  gridempspacing="4"
  inkscape:window-width="847"
  inkscape:window-height="582"
  inkscape:window-x="133"
  inkscape:window-y="72" />
<metadata
  id="metadata7">
 <rdf:RDF>
   <cc:Work
      rdf:about="">
     <dc:format>image/svg+xml</dc:format>
     <dc:type
        rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
   </cc:Work>
 </rdf:RDF>
</metadata>
<g
  inkscape:label="Layer 1"
  inkscape:groupmode="layer"
  id="layer1">
 <path
    sodipodi:type="star"
    style="fill:white;fill-opacity:1;stroke:#7f7f7f;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
    id="path3651"
    sodipodi:sides="5"
    sodipodi:cx="31.934996"
    sodipodi:cy="32.065002"
    sodipodi:r1="24.493324"
    sodipodi:r2="10.409663"
    sodipodi:arg1="0.9442689"
    sodipodi:arg2="1.5725874"
    inkscape:flatsided="false"
    inkscape:rounded="2.4286129e-017"
    inkscape:randomized="0"
    d="M 46.296296,51.906272 L 31.916351,42.474649 L 17.502712,51.8547 L 22.029072,35.264028 L 8.654054,24.454438 L 25.831443,23.632463 L 31.978866,7.5717174 L 38.068716,23.65438 L 55.243051,24.537884 L 41.829396,35.299492 L 46.296296,51.906272 z "
    transform="matrix(0.986858,0,0,1.03704,0.471316,1.159472)" />
</g>
</svg>`

function gameEnd() {
  const audioSrcFailure = new Audio('./assets/audio/failure.mp3')
  const audioSrcSuccess = new Audio('./assets/audio/success.mp3')
  document.querySelector('.switcher_container').classList.add('card_word_hidden')
  document.querySelector('.stars').innerHTML = ''
  document.querySelector('.container_cards').classList.add('card_word_hidden')
  document.querySelector('.btn_game').classList.add('card_word_hidden')
  if (errorAnswer === 1) {
    document.querySelector('.container').innerHTML += `<div class="end_game"><span>${errorAnswer} error</span><br><img src="english-for-kids/src/img/failure.jpg" alt="failure"></div>`
    audioSrcFailure.play()
  } else if (errorAnswer > 1) {
    document.querySelector('.container').innerHTML += `<div class="end_game"><span>${errorAnswer} errors</span><br><img src="english-for-kids/src/img/failure.jpg" alt="failure"></div>`
    audioSrcFailure.play()
  } else if (errorAnswer === 0) {
    document.querySelector('.container').innerHTML += `<div class="end_game"><span>Win!</span><br><img src="english-for-kids/src/img/success.jpg" alt="success"></div>`
    audioSrcSuccess.play()
  }
  setTimeout(open, 4000)
}
