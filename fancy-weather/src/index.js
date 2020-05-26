/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import './styles/style.css';
import { svg } from './svgImageModule';

const objToday = new Date();
const weekdayShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekdayLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = weekdayShort[objToday.getDay()];
const dayOfMonth = objToday.getDate();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const curMonth = months[objToday.getMonth()];
const today = `${dayOfWeek} ${dayOfMonth} ${curMonth}`;

const time = setInterval(() => {
  const date = new Date();
  const curMinute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  document.querySelector('.block_date_day').innerHTML = `${today}`;
  document.querySelector('.block_time').innerHTML = `${date.getHours()}:${curMinute}`;
}, 1000);

let timeDay;
const REFRESH = document.getElementById('refresh');
const WRAPPER = document.getElementById('wrapper_block');
const F_TEMP = document.getElementById('temp-f');
const C_TEMP = document.getElementById('temp-c');

REFRESH.addEventListener('click', ChangeLink, false);
F_TEMP.addEventListener('click', changeTempToFahrenheit);
C_TEMP.addEventListener('click', changeTempToCelsius);


function GetRandom() {
  const max = 1000000;
  const min = 1;
  return Math.floor(Math.random() * max + min);
}

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

// сделать тег по месяцам
async function ChangeLink() {
  const random = GetRandom();
  const dateHour = getTimeDay();
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=${random}&query=nature,summer,${dateHour}&client_id=DV7WC8XDv7absV4qiByr-gG2HlYcViKFAR3s_tDQS8A`;
  const res = await fetch(url);
  const data = await res.json();
  const imgUrl = data.urls.regular;
  REFRESH.classList.add('active_refresh');
  setTimeout(active, 1000);
  WRAPPER.style.backgroundImage = `url('${imgUrl}')`;
}

function active() {
  REFRESH.classList.remove('active_refresh');
}

const tempToday = document.querySelector('.temp_today_data');
const summaryToday = document.querySelector('.summary');
const apparentTemp = document.querySelector('.apparent_temp_data');
const windToday = document.querySelector('.wind_data');
const humidityToday = document.querySelector('.humidity_data');
const imgWeatherToday = document.querySelector('.img_weather > img');

const tempDay = document.querySelectorAll('.day_temp_data');
const weatherImg = document.querySelectorAll('.img_weather_day');

async function getWeather() {
  const url = `https://api.climacell.co/v3/weather/forecast/daily?lat=15.1028&lon=37.2539&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=qOLLc9CJwqBIVL1lP9fE5IjDb3kzoL2x`;
  const res = await fetch(url);
  const data = await res.json();
  const weather = data[0].weather_code.value;
  const feel = Math.round(data[0].feels_like[1].max.value);
  const temp = Math.round(data[0].temp[1].max.value);
  const wind = data[0].wind_speed[1].max.value.toFixed(1);
  const humidity = data[0].humidity[0].min.value;
  tempToday.textContent = temp;
  summaryToday.textContent = weather.replace('_', ' ');
  summaryToday.textContent = summaryToday.textContent.charAt(0).toUpperCase()
   + summaryToday.textContent.slice(1);
  apparentTemp.textContent = feel;
  windToday.textContent = wind;
  humidityToday.textContent = humidity;
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
}

function changeTempToFahrenheit() {
  const toFahr = Math.round(((Math.round(tempToday.textContent) * 9) / 5) + 32);
  const toFahrApparent = Math.round(((Math.round(apparentTemp.textContent) * 9) / 5) + 32);
  F_TEMP.classList.add('active_temp');
  C_TEMP.classList.remove('active_temp');
  tempToday.textContent = toFahr;
  apparentTemp.textContent = toFahrApparent;

  tempDay.forEach((e) => {
    e.textContent = Math.round(((Math.round(e.textContent) * 9) / 5) + 32);
  });
}

function changeTempToCelsius() {
  const toCelsius = Math.round(((Math.round(tempToday.textContent) - 32) * 5) / 9);
  const toCelsiusApparent = Math.round(((Math.round(tempToday.textContent) - 32) * 5) / 9);
  F_TEMP.classList.remove('active_temp');
  C_TEMP.classList.add('active_temp');
  tempToday.textContent = toCelsius;
  apparentTemp.textContent = toCelsiusApparent;

  tempDay.forEach((e) => {
    e.textContent = Math.round(((Math.round(e.textContent) - 32) * 5) / 9);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  getWeather();
  ChangeLink();
});
