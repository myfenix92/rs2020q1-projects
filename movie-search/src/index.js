import './styles/style.css';
import Swiper from 'swiper';
import initKeyboard from './moduleKeyboard';
import {
  KEYBOARD_CONTAINER, INPUT, LOADER_CONTAINER, SEARCH_BTN, CLEAR_BTN,
  KEYBOARD_BTN, RESULT_CONTAINER, DOTS_CONTAINER, VOICE_BTN, isCyrillic, delayDots,
} from './moduleConst'

let titleArray = [];
let posterArray = [];
let yearArray = [];
let raitingArray = [];
let raitData = [];
let typeArray = [];
let page = 1;
let tempInput;
let tempPage;
let inputCurrentValue;
let isTrue;
let resultCount;
let itemSlide;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

CLEAR_BTN.addEventListener('click', clearInput);
KEYBOARD_BTN.addEventListener('click', addKeyboard);
SEARCH_BTN.addEventListener('click', initSearch);
VOICE_BTN.addEventListener('click', speakMovie);
document.addEventListener('mousedown', clickEnter)
document.querySelector('.swiper-button-next').addEventListener('click', addNewSlide);
INPUT.addEventListener('keydown', clickEnter)

function clickEnter(event) {
  if (event.target.textContent === 'Enter' || event.keyCode === 13) {
    initSearch()
  }
}

async function valueTranslate() {
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200502T220917Z.cd9bb434abbf37f3.c07bdee9e96c935d70f599242ba2dd8c64fd0f9b&text=${inputCurrentValue}&lang=ru-en`;
  const res = await fetch(url);
  const data = await res.json();
  inputCurrentValue = data.text[0].replace(/^The /gi, '');
  getMovie();
}

function initSearch() {
  tempPage = page;
  page = 1;
  tempInput = inputCurrentValue;
  isTrue = true;
  INPUT.placeholder = 'Search Movie';
  KEYBOARD_CONTAINER.classList.add('keyboard_container_visible');
  if (INPUT.value !== '') {
    inputCurrentValue = INPUT.value;
    if (isCyrillic(inputCurrentValue)) {
      valueTranslate();
    } else {
      getMovie();
    }
  } else {
    RESULT_CONTAINER.classList.remove('hidden_result');
    RESULT_CONTAINER.textContent = `Something wrong... Enter movie title`;
  }
}

function speakMovie() {
  recognition.start();
  INPUT.value = '';
  INPUT.placeholder = 'Speak';
  recognition.addEventListener('end', initSearch);
}

recognition.interimResults = true;
recognition.lang = 'en' && 'ru';

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');
  INPUT.value = transcript;
});

function clearInput() {
  INPUT.value = '';
  LOADER_CONTAINER.querySelector('p').textContent = '';
  INPUT.focus();
}

function addKeyboard() {
  INPUT.focus();
  KEYBOARD_CONTAINER.classList.toggle('keyboard_container_visible')
}

function clearArray() {
  titleArray = [];
  posterArray = [];
  yearArray = [];
  raitingArray = [];
  raitData = [];
  typeArray = [];
}

async function getMovie() {
  const url = `https://www.omdbapi.com/?s=${inputCurrentValue}&page=${page}&apikey=24f0fb79`;
  RESULT_CONTAINER.classList.add('hidden_result');
  DOTS_CONTAINER.style.visibility = 'visible';
  const res = await fetch(url);
  const data = await res.json();
  itemSlide = 0;
  resultCount = data.totalResults;
  if (data.Response === 'True' && isTrue) {
    clearArray();
  }
  if (resultCount - ((page - 1) * 10) >= 10) {
    itemSlide = 10;
  } else {
    itemSlide = resultCount - ((page - 1) * 10);
  }

  try {
    for (let i = 0; i < itemSlide; i += 1) {
      titleArray.push(data.Search[i].Title);
      posterArray.push(data.Search[i].Poster);
      yearArray.push(data.Search[i].Year);
      raitingArray.push(data.Search[i].imdbID);
      typeArray.push(data.Search[i].Type);
    }
    for (let itemRait = raitingArray.length - itemSlide;
      itemRait < raitingArray.length; itemRait += 1) {
      const urlRait = `https://www.omdbapi.com/?i=${raitingArray[itemRait]}&apikey=24f0fb79`;
      const resRait = await fetch(urlRait);
      const dataRait = await resRait.json();
      raitData.push(dataRait.imdbRating);
    }

    if (INPUT.value !== '' && data.Response === 'True') {
      RESULT_CONTAINER.classList.remove('hidden_result');
      RESULT_CONTAINER.textContent = `Showing results for "${inputCurrentValue}". Find ${resultCount} results.`;
    } else if (INPUT.value !== '' && data.Response === 'False') {
      throw Error(data.Error);
    }
  } catch (error) {
    if (page === 1) {
      RESULT_CONTAINER.classList.remove('hidden_result');
      RESULT_CONTAINER.textContent = `${data.Error} No results for "${inputCurrentValue}"`
    } else {
      RESULT_CONTAINER.classList.remove('hidden_result');
    }
  }

  setTimeout(dots, delayDots)
  if (data.Response === 'True') {
    page += 1;
    tempInput = inputCurrentValue;
  } else {
    page = tempPage;
    inputCurrentValue = tempInput;
  }
  if (data.Response === 'True' && isTrue) {
    document.querySelector('.swiper-wrapper').innerHTML = '';
  }
  isTrue = false;
  if (data.Response === 'True') {
    createSlide();
    addTitle();
    addPoster();
    addYear();
    addRaiting();
  }
}

const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: false,
  simulateTouch: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


function dots() {
  DOTS_CONTAINER.style.visibility = 'hidden'
}

function addNewSlide() {
  if (document.querySelectorAll('.swiper-slide').length - mySwiper.realIndex < 5 && DOTS_CONTAINER.style.visibility === 'hidden') {
    if (titleArray.length < resultCount) {
      getMovie();
    }
  }
}

mySwiper.on('slideChange', addNewSlide);

function createSlide() {
  for (let numberSlide = 0; numberSlide < itemSlide; numberSlide += 1) {
    mySwiper.appendSlide('<div class="swiper-slide"></div>');
  }
}

function addTitle() {
  document.querySelectorAll('.swiper-slide').forEach((slideItem) => {
    slideItem.innerHTML = '';
  });
  document.querySelectorAll('.swiper-slide').forEach((e) => e.append(document.createElement('a')));
  let numberTitle = 0;
  document.getElementById('slider_container').querySelectorAll('a').forEach((titleItem) => {
    titleItem.textContent = `${titleArray[numberTitle]} (${typeArray[numberTitle]})`;
    titleItem.classList.add('name_movie');
    titleItem.setAttribute('href', `https://www.imdb.com/title/${raitingArray[numberTitle]}/videogallery/`);
    titleItem.target = '_blank';
    numberTitle += 1;
  })
}

function addPoster() {
  document.querySelectorAll('.swiper-slide').forEach((e) => e.append(document.createElement('img')));
  let numberPoster = 0;
  document.getElementById('slider_container').querySelectorAll('img').forEach((posterImg) => {
    if (posterArray[numberPoster] === 'N/A') {
      posterImg.src = './img/poster_movie.jpg';
    } else {
      posterImg.src = posterArray[numberPoster];
    }
    posterImg.classList.add('poster_movie');
    numberPoster += 1;
  })
}

function addYear() {
  document.querySelectorAll('.swiper-slide').forEach((e) => e.append(document.createElement('p')));
  let numberYear = 0;
  document.getElementById('slider_container').querySelectorAll('p').forEach((yearItem) => {
    yearItem.textContent = yearArray[numberYear];
    yearItem.classList.add('year_movie');
    numberYear += 1;
  })
}

function addRaiting() {
  document.querySelectorAll('.swiper-slide').forEach((e) => e.append(document.createElement('span')));
  let numberRait = 0;
  document.getElementById('slider_container').querySelectorAll('span').forEach((raitItem) => {
    raitItem.textContent = raitData[numberRait];
    raitItem.classList.add('raiting_movie');
    numberRait += 1;
  })
}

function initMovie() {
  inputCurrentValue = 'batman';
  getMovie();
}

window.addEventListener('DOMContentLoaded', () => {
  initMovie();
  INPUT.focus();
  initKeyboard();
})
