/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import './styles/style.css';
import { svg } from './svgImageModule';

const objToday = new Date();
const weekdayShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekdayLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = weekdayShort[objToday.getDay()];
const dayOfMonth = objToday.getDate();
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const curMonth = monthArray[objToday.getMonth()];
const today = `${dayOfWeek} ${dayOfMonth} ${curMonth}`;
const REFRESH = document.getElementById('refresh');
const BODY = document.querySelector('body');
const F_TEMP = document.getElementById('temp-f');
const C_TEMP = document.getElementById('temp-c');
const tempToday = document.querySelector('.temp_today_data');
const summaryToday = document.querySelector('.summary');
const apparentTemp = document.querySelector('.apparent_temp_data');
const windToday = document.querySelector('.wind_data');
const humidityToday = document.querySelector('.humidity_data');
const imgWeatherToday = document.querySelector('.img_weather > img');
const tempDay = document.querySelectorAll('.day_temp_data');
const weatherImg = document.querySelectorAll('.img_weather_day');
const NAME_LOCATION = document.querySelector('.block_city');
const windDirection = document.querySelector('.wind_direction');
const precipitationData = document.querySelector('.precipitation_data');
const pressureData = document.querySelector('.pressure_data');
const INPUT = document.getElementById('input_search');
const LAT_FIELD = document.querySelector('.latitude_data');
const LNG_FIELD = document.querySelector('.longitude_data');
const SEARCH_BTN = document.getElementById('search');
const LANG = document.getElementById('lang');
const VOICE_BTN = document.querySelector('.micro_btn');

let inputValue;
let TEMP_BTN;
let langDate;
let locationData;
let timeDay;

const time = setInterval(() => {
  const date = new Date();
  const curSeconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  const curMinute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  document.querySelector('.block_date_day').textContent = `${today}`;
  document.querySelector('.block_time').textContent = `${date.getHours()}:${curMinute}:${curSeconds}`;
}, 1000);

REFRESH.addEventListener('click', ChangeLink, false);
F_TEMP.addEventListener('click', changeTempToFahrenheit);
C_TEMP.addEventListener('click', changeTempToCelsius);
SEARCH_BTN.addEventListener('click', searchLocation);
INPUT.addEventListener('keydown', clickEnter);
LANG.addEventListener('click', changeLang);
VOICE_BTN.addEventListener('click', speakMovie);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function GetRandom() {
  const max = 1000000;
  const min = 1;
  return Math.floor(Math.random() * max + min);
}

function speakMovie() {
  recognition.start();
  INPUT.value = '';
  INPUT.placeholder = 'Speak';
  recognition.addEventListener('end', searchLocation);
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

function getTimeDay() {
  const hourData = new Date().getHours();
  const timeDayArray = ['morning', 'afternoon', 'evening', 'night'];

  if (hourData >= 0 && hourData < 6) {
    timeDay = timeDayArray[3];
  }
  if (hourData > 5 && hourData < 12) {
    timeDay = timeDayArray[0];
  }
  if (hourData > 11 && hourData < 18) {
    timeDay = timeDayArray[1];
  }
  if (hourData > 17 && hourData <= 23) {
    timeDay = timeDayArray[2];
  }
  return timeDay;
}

async function ChangeLink() {
  const random = GetRandom();
  const dateHour = getTimeDay();
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=${random}&query=nature,${dateHour}&client_id=iUWFazITLIp6OVqPGdpqeut-qVTFn_4qW4wtRLr_tGs`;
  const res = await fetch(url);
  const data = await res.json();
  const imgUrl = data.urls.regular;
  REFRESH.classList.add('active_refresh');
  setTimeout(active, 1000);
  BODY.style.backgroundImage = `url('${imgUrl}')`;
}

function active() {
  REFRESH.classList.remove('active_refresh');
}

function changeTempToFahrenheit() {
  F_TEMP.classList.add('active_temp');
  C_TEMP.classList.remove('active_temp');
  TEMP_BTN = document.querySelector('.active_temp');
  changeTemp();
  const toFahr = Math.round(((Math.round(tempToday.textContent) * 9) / 5) + 32);
  const toFahrApparent = Math.round(((Math.round(apparentTemp.textContent) * 9) / 5) + 32);

  tempToday.textContent = toFahr;
  apparentTemp.textContent = toFahrApparent;

  tempDay.forEach((e) => {
    e.textContent = Math.round(((Math.round(e.textContent) * 9) / 5) + 32);
  });
}

function changeLang() {
  localStorage.setItem('lang', LANG.value);
  langDate = LANG.value;
  return langDate;
}

function changeTempToCelsius() {
  F_TEMP.classList.remove('active_temp');
  C_TEMP.classList.add('active_temp');
  TEMP_BTN = document.querySelector('.active_temp');
  changeTemp();
  const toCelsius = Math.round(((Math.round(tempToday.textContent) - 32) * 5) / 9);
  const toCelsiusApparent = Math.round(((Math.round(tempToday.textContent) - 32) * 5) / 9);

  tempToday.textContent = toCelsius;
  apparentTemp.textContent = toCelsiusApparent;

  tempDay.forEach((e) => {
    e.textContent = Math.round(((Math.round(e.textContent) - 32) * 5) / 9);
  });
}

function changeTemp() {
  localStorage.setItem('temp', document.querySelector('.active_temp').textContent);
}

async function getUserLocation() {
  if (localStorage.getItem('lang') === 'ru') {
    LANG.options[1].selected = true;
  }
  if (localStorage.getItem('lang') === 'be') {
    LANG.options[2].selected = true;
  }

  const url = `https://ipinfo.io/json?token=7f4549f504fd22`;
  const res = await fetch(url);
  const data = await res.json();

  inputValue = `${data.city}, ${data.region}, ${data.postal}, ${data.country}`;
  searchLocation();
}

async function searchLocation() {
  changeLang();
  if (!inputValue) {
    inputValue = INPUT.value;
  }
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=c22238163fb1499cbd75849a97fd0516&language=${langDate}&pretty=1`;
  const res = await fetch(url);
  const data = await res.json();
  LAT_FIELD.textContent = data.results[0].annotations.DMS.lat;
  LNG_FIELD.textContent = data.results[0].annotations.DMS.lng;
  const { lat } = data.results[0].geometry;
  const lon = data.results[0].geometry.lng;
  const delComma = data.results[0].formatted.indexOf(',');
  const nameCity = data.results[0].formatted.slice(0, delComma);
  NAME_LOCATION.textContent = `${nameCity}, ${data.results[0].components.country}`;

  const location = {
    lon,
    lat,
  };

  locationData = location;
  getMap();
  getWeather();
  inputValue = '';
}

function getMap() {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: locationData,
    zoom: 8,
    attributionControl: true,
    accessToken: 'pk.eyJ1IjoibXlmZW5peDkyIiwiYSI6ImNrYXBpdXhwMTF5NTYzMXA2emY0M3pnd24ifQ.I73eBezMUvPr3OAN-aF1Cg',
  });
  const marker = new mapboxgl.Marker()
    .setLngLat(locationData)
    .addTo(map);
}

function clickEnter(event) {
  if (event.keyCode === 13) {
    searchLocation();
  }
}

async function getWeather() {
  ChangeLink();
  const url = `https://api.climacell.co/v3/weather/forecast/daily?lat=${locationData.lat}&lon=${locationData.lon}&unit_system=si&start_time=now&fields=feels_like%2Cbaro_pressure%2Cprecipitation%2Cwind_direction%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=qOLLc9CJwqBIVL1lP9fE5IjDb3kzoL2x`;
  const res = await fetch(url);
  const data = await res.json();
  const weather = data[0].weather_code.value;
  const feel = Math.round(data[0].feels_like[1].max.value);
  const temp = Math.round(data[0].temp[1].max.value);
  const wind = data[0].wind_speed[1].max.value.toFixed(1);
  const windDirect = data[0].wind_direction[1].max.value;
  const precipitation = data[0].precipitation[0].max.value.toFixed(2);
  const humidity = data[0].humidity[0].min.value;
  const pressure = (((data[0].baro_pressure[1].max.value) / 133.3224) * 100).toFixed(2);

  if ((windDirect >= 0 && windDirect < 22.5) && (windDirect >= 337.5 && windDirect <= 360)) {
    windDirection.textContent = `N`;
  }
  if (windDirect >= 22.5 && windDirect < 67.5) {
    windDirection.textContent = `NE`;
  }
  if (windDirect >= 67.5 && windDirect < 112.5) {
    windDirection.textContent = `E`;
  }
  if (windDirect >= 112.5 && windDirect < 157.5) {
    windDirection.textContent = `SE`;
  }
  if (windDirect >= 157.5 && windDirect < 202.5) {
    windDirection.textContent = `S`;
  }
  if (windDirect >= 202.5 && windDirect < 247.5) {
    windDirection.textContent = `SW`;
  }
  if (windDirect >= 247.5 && windDirect < 292.5) {
    windDirection.textContent = `W`;
  }
  if (windDirect >= 292.5 && windDirect < 337.5) {
    windDirection.textContent = `NW`;
  }

  tempToday.textContent = temp;
  summaryToday.textContent = weather.replace('_', ' ');
  summaryToday.textContent = summaryToday.textContent.charAt(0).toUpperCase()
   + summaryToday.textContent.slice(1);
  apparentTemp.textContent = feel;
  windToday.textContent = wind;
  humidityToday.textContent = humidity;
  precipitationData.textContent = precipitation;
  pressureData.textContent = pressure;
  imgWeatherToday.src = `src/assets/${weather}.svg`;

  let indexTemp = 1;
  tempDay.forEach((e) => {
    e.textContent = Math.round(data[indexTemp].temp[1].max.value);
    indexTemp += 1;
  });

  weatherImg.forEach((e) => {
    e.src = `src/assets/${data[indexTemp].weather_code.value}.svg`;
    indexTemp += 1;
  });

  if (localStorage.getItem('temp') === 'F°') {
    changeTempToFahrenheit();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  getUserLocation();
});
