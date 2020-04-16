import './styles/style.css'
import './styles/style.scss'
import { bootstrap } from './SPA'
import { appModule } from './app/app.module'
import cards from './moduleCards'

bootstrap(appModule)

console.log('Index.js is working!')


document.addEventListener('click', (event) => {
  if (event.target.tagName === 'LABEL') {
    document.getElementById('container_cards').querySelectorAll('a').forEach((e) => e.classList.toggle('play'))
    document.querySelector('button').classList.toggle('hidden_btn')
    document.querySelector('button').classList.remove('refresh_btn')
    document.querySelector('button').innerHTML = 'Start Game'
    document.querySelector('nav').classList.toggle('play')
  }
})


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
    document.getElementById('burger_menu').classList.toggle('menu_transform')
  }
})

// correct answer
// document.getElementById('card_item').addEventListener('click', () => {
//   document.getElementById('card_item').classList.toggle('correct')
// })
