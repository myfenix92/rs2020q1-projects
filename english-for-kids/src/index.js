import './styles/style.css'
import './styles/style.scss'
import cards from './moduleCards'

// import { bootstrap } from './SPA'
// import { appModule } from './app/app.module'


// bootstrap(appModule)

console.log('Index.js is working!')


const nameCards = ['Action (set A)', 'Action (set B)', 'Animals (set A)', 'Animals (set B)', 'Clothes', 'Emotions', 'Food', 'Weather']

function init() {
  document.getElementById('container_cards').querySelector('div').append(createCards())
  document.querySelectorAll('.container_card').forEach((e) => {
    e.classList.remove('container_card')
    e.classList.add('card')
  })
  document.getElementById('container_cards').querySelectorAll('span').forEach((e) => {
    e.classList.add('card_word')
  })
}

document.addEventListener('click', (event) => {
  if (event.target.tagName === 'LABEL') {
    document.getElementById('container_cards').querySelectorAll('div').forEach((e) => e.classList.toggle('play'))
    document.querySelectorAll('.card_word').forEach((e) => {
      e.classList.toggle('card_word_hidden')
    })
    document.querySelectorAll('.rotateSvg').forEach((e) => {
      e.classList.toggle('card_word_hidden')
    })
    document.querySelector('button').classList.toggle('hidden_btn')
    document.querySelector('button').classList.remove('refresh_btn')
    document.querySelector('button').innerHTML = 'Start Game'
    document.querySelector('nav').classList.toggle('play')
  }
})

document.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    document.querySelectorAll('.card').forEach((e) => {
      if (e.querySelector('img').src === event.target.src) {
        const audioSrc = new Audio(e.querySelector('audio').src)
        audioSrc.play()
      }
    })
  }
})

// // document.addEventListener('mouseover', (event) => {
// //   console.log(event)
// // })

// document.addEventListener('click', (event) => {
//   if (event.target.tagName === 'svg') {
//     document.addEventListener('mouseenter', (event) => {
//       console.log(event.target)
//     })
//   }
//   //   document.querySelectorAll('.card_word').forEach((e) => {
//   //     if (e.target.classList.contains("card_word")) {
//   //       e.classList.add('1')
//   //     }
//   //   })
// })


document.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    document.querySelector('button').innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 341.333 341.333" style="enable-background:new 0 0 341.333 341.333;" xml:space="preserve" width="30px" height="30px">
     <g>
       <g>
         <path d="M341.227,149.333V0l-50.133,50.133C260.267,19.2,217.707,0,170.56,0C76.267,0,0.107,76.373,0.107,170.667
           s76.16,170.667,170.453,170.667c79.467,0,146.027-54.4,164.907-128h-44.373c-17.6,49.707-64.747,85.333-120.533,85.333
           c-70.72,0-128-57.28-128-128s57.28-128,128-128c35.307,0,66.987,14.72,90.133,37.867l-68.8,68.8H341.227z"/>
       </g>
     </g>
     </svg>`
    document.querySelector('button').classList.add('refresh_btn')
  }
})

function open() {
  document.getElementById('nav_menu').classList.toggle('show')
}

document.getElementById('menu').onclick = function () {
  document.getElementById('burger_menu').classList.toggle('menu_transform')
  open()
};

document.getElementById('nav_menu').addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    open()
    init()
    document.getElementById('burger_menu').classList.toggle('menu_transform')
  }
})

// correct answer
// document.getElementById('card_item').addEventListener('click', () => {
//   document.getElementById('card_item').classList.toggle('correct')
// })

function createCards() {
  const fragment = document.createDocumentFragment()
  let numberCards
  const rotateImg = `<svg class="rotateSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill-rule="evenodd"></path></g></svg>`
  for (let i = 0; i < nameCards.length; i++) {
    if (nameCards[i] === event.target.innerHTML) {
      numberCards = i
    }
  }
  let numberAddCard = 0
  const createCard = document.getElementById('container_cards').querySelectorAll('div').forEach((cardItem) => {
    cardItem.innerHTML = `<img src="${cards[numberCards][numberAddCard].image}"><br><span>${cards[numberCards][numberAddCard].word}</span><span class="translate_word">${cards[numberCards][numberAddCard].translation}</span>${rotateImg}<audio src="${cards[numberCards][numberAddCard].audioSrc}"></audio>`
    numberAddCard++
  })

  fragment.append(createCard)
  return fragment
}
