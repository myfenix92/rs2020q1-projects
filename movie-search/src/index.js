import './styles/style.css';
import createSlide from './swiper';

let titleArray = [];
let posterArray = [];
let yearArray = [];
let raitingArray = [];
let raitData = [];
let page = 1;
let inputValue;

function clearInput() {
  document.getElementById('search_input').value = '';
  document.getElementById('loader').querySelector('p').textContent = '';
}

document.querySelector('.clear').addEventListener('click', clearInput);

document.getElementById('btn').addEventListener('click', initSearch);

function initSearch() {
  document.querySelector('.swiper-wrapper').innerHTML = '';
  inputValue = document.getElementById('search_input').value;
  titleArray = [];
  posterArray = [];
  yearArray = [];
  raitingArray = [];
  raitData = [];
  getMovie();
  // addResult()
}

async function getMovie() {
  const url = `https://www.omdbapi.com/?s=${inputValue}&page=${page}&apikey=24f0fb79`;
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
  } finally {
    document.querySelector('.dots').style.visibility = 'hidden';
  }
  page += 1;
  createSlide();
  addTitle();
  addPoster();
  addYear();
  addRaiting();
  console.log(titleArray)
}

// function addResult() {
//   document.getElementById('loader').append(document.createElement('p'));
//   document.getElementById('loader').querySelector('p').classList.add('result_field')
//   if (inputValue === '') {
//     document.getElementById('loader').querySelector('p').textContent = `Enter movie title`;
//   }
//   if (inputValue !== '' && titleArray.length === 0) {
//     document.getElementById('loader').querySelector('p').textContent = `No results for ${inputValue}`;
//   // }
//   if (document.querySelector('.swiper-slide').innerText !== '') {
//     document.getElementById('loader').querySelector('p').textContent = `Showing results for ${inputValue}`;
//   }
// }

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

async function addRaiting() {
  document.querySelectorAll('.swiper-slide').forEach((e) => e.append(document.createElement('span')));
  let i = 0;
  document.getElementById('slider_container').querySelectorAll('span').forEach((e) => {
    e.textContent = raitData[i];
    e.classList.add('raiting_movie');
    i += 1;
  })
}

function init() {
  inputValue = 'cat';
  getMovie();
}


function addNewSlide() {
  const addSlide = [...document.querySelector('.swiper-wrapper').querySelectorAll('.swiper-slide')];
  if (addSlide[addSlide.length - 4].classList[1] === 'swiper-slide-next') {
    getMovie();
  }
  // let i = 0;
  // addSlide.forEach((e) => {
  //   if (e.classList[1] === 'swiper-slide-next') {
  //     if (addSlide.length - i < 5) {
  //       getMovie();
  //     }
  //   }
  //   i += 1;
  // })
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
})
