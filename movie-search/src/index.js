import './styles/style.css';
import createSlide from './swiper';
import initKeyboard from './moduleKeyboard'

let titleArray = [];
let posterArray = [];
let yearArray = [];
let raitingArray = [];
let raitData = [];
export let page = 1;
let inputValue;
let isTrue

export const KEYBOARD_CONTAINER = document.getElementById('keyboard_container_movie')
export let input = document.getElementById('search_input')

const isCyrillic = function (text) {
  return /[а-я]/i.test(text);
}

function clearInput() {
  document.getElementById('search_input').value = '';
  document.getElementById('loader').querySelector('p').textContent = '';
  document.getElementById('search_input').focus()
}

function addKeyboard() {
  if (KEYBOARD_CONTAINER.className !== 'keyboard_container_visible') {
    KEYBOARD_CONTAINER.classList.add('keyboard_container_visible')
  }
  else {
    KEYBOARD_CONTAINER.classList.remove('keyboard_container_visible')
  }
 }

document.querySelector('.clear').addEventListener('click', clearInput);
document.querySelector('.keyboard_icon').addEventListener('click', addKeyboard);

document.getElementById('btn').addEventListener('click', initSearch);

export default function initSearch() {
  isTrue = true
  if (document.getElementById('search_input').value !== '') {
    inputValue = document.getElementById('search_input').value;
    if (isCyrillic(inputValue)) {
      valueTranslate()
    } else {
      clearArray()
      getMovie();
    }
  } else {
    document.querySelector('.result_field').classList.remove('hidden_result');
    document.querySelector('.result_field').textContent = `Something wrong... Enter movie title`;
  }
}

function clearArray() {
  titleArray = [];
  posterArray = [];
  yearArray = [];
  raitingArray = [];
  raitData = [];
}

async function valueTranslate() {
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200502T220917Z.cd9bb434abbf37f3.c07bdee9e96c935d70f599242ba2dd8c64fd0f9b&text=${inputValue}&lang=ru-en`;
  const res = await fetch(url);
  const data = await res.json();
  inputValue = data.text[0];
  clearArray()
  getMovie();
}

async function getMovie() {
  const url = `https://www.omdbapi.com/?s=${inputValue}&page=${page}&apikey=24f0fb79`;
  document.querySelector('.result_field').classList.add('hidden_result');
  document.querySelector('.dots').style.visibility = 'visible';
  const res = await fetch(url);
  const data = await res.json();

  try {
    for (let i = 0; i < 10; i += 1) {
      titleArray.push(data.Search[i].Title);
      posterArray.push(data.Search[i].Poster);
      yearArray.push(data.Search[i].Year);
      raitingArray.push(data.Search[i].imdbID);
    }
   
    for (let i = raitingArray.length - 10; i < raitingArray.length; i += 1) {
      const urlRait = `https://www.omdbapi.com/?i=${raitingArray[i]}&apikey=24f0fb79`;
      const resRait = await fetch(urlRait);
      const dataRait = await resRait.json();
      raitData.push(dataRait.imdbRating);
    }

    if (document.getElementById('search_input').value !== '') {
      document.querySelector('.result_field').classList.remove('hidden_result')
      document.querySelector('.result_field').textContent = `Showing results for ${inputValue}`;
    }
  } catch {
    console.log('error')
    document.querySelector('.result_field').classList.remove('hidden_result')
    document.querySelector('.result_field').textContent = `No results for ${inputValue}`;
  }

  document.querySelector('.dots').style.visibility = 'hidden';

  page += 1;
  console.log(titleArray.length)
  
  if (posterArray.length !== 0 && isTrue) {
  document.querySelector('.swiper-wrapper').innerHTML = ''}
  isTrue = false
  if (titleArray.length !== 0) {
  createSlide();
  addTitle();
  addPoster();
  addYear();
  addRaiting();
  }
}

function addTitle() {
  document.querySelectorAll('.swiper-slide').forEach((e) => {
    e.innerHTML = '';
  });
  document.querySelectorAll('.swiper-slide').forEach((e) => e.append(document.createElement('a')));
  let i = 0
  document.getElementById('slider_container').querySelectorAll('a').forEach((e) => {
    e.textContent = titleArray[i];
    e.classList.add('name_movie');
    e.setAttribute('href', `https://www.imdb.com/title/${raitingArray[i]}/videogallery/`);
    e.target = '_blank'
    i += 1;
  })
}

function addPoster() {
  document.querySelectorAll('.swiper-slide').forEach((e) => e.append(document.createElement('img')));
  let i = 0;
  document.getElementById('slider_container').querySelectorAll('img').forEach((e) => {
    if (posterArray[i] === 'N/A') {
      e.src = './img/poster_movie.jpg';
    } else {
      e.src = posterArray[i];
    }
    e.classList.add('poster_movie');
    i += 1;
  })
}

function addYear() {
  document.querySelectorAll('.swiper-slide').forEach((e) => e.append(document.createElement('p')));
  let i = 0;
  document.getElementById('slider_container').querySelectorAll('p').forEach((e) => {
    e.textContent = yearArray[i];
    e.classList.add('year_movie');
    i += 1;
  })
}

function addRaiting() {
  document.querySelectorAll('.swiper-slide').forEach((e) => e.append(document.createElement('span')));
  let i = 0;
  document.getElementById('slider_container').querySelectorAll('span').forEach((e) => {
    e.textContent = raitData[i];
    e.classList.add('raiting_movie');
    i += 1;
  })
}

function init() {
  inputValue = 'batman';
  getMovie();
}


function addNewSlide() {
  const addSlide = [...document.querySelector('.swiper-wrapper').querySelectorAll('.swiper-slide')];
  if (addSlide[addSlide.length - 4].classList[1] === 'swiper-slide-next') {
    getMovie();
  }
}

document.querySelector('.swiper-button-next').addEventListener('click', addNewSlide);
// document.querySelector('.swiper-wrapper').addEventListener('mousedown', addNewSlide);

document.getElementById('search_input').addEventListener('keyup', (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    initSearch();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  init();
  document.getElementById('search_input').focus();
  initKeyboard();
})