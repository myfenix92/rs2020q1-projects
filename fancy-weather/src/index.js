import './styles/style.css';
import svgImage from './svgModule';
import translateValue from './translateModule';
import {
  REFRESH, F_TEMP, BODY, C_TEMP, tempToday, summaryToday, apparentTemp, windData,
  humidityToday, imgWeatherToday, tempDay, weatherImg, NAME_LOCATION, precipitationData,
  pressureData, INPUT, LAT_FIELD, LNG_FIELD, SEARCH_BTN, LANG, VOICE_BTN, LISTEN_BTN,
  date, dayWeekWeather, synth, message, messageSecond, imgApi, imgApiKey, geoApi,
  geoApiKey, mapKey, weatherApi, weatherApiField, weatherApiKey, apparentToday, windToday,
  precipitationToday, pressureToday, latitude, longitude, humidityData,
} from './constModule';
import { GetRandom, activeClassResresh } from './helperModule';

let currentTimeZone;
let curTimeZoneHour;
let imgWeatherDay;
let summaryData;
let numberWeek;
let tempNumberWeek;
let inputValue;
// eslint-disable-next-line no-unused-vars
let TEMP_BTN;
let langDate;
let locationData;
let timeDay;
let isSearch = false;
let transValue;

function getTime() {
  const curDate = new Date();
  const dayOfWeek = translateValue.weekShort[langDate][date.getDay()];
  const dayOfMonth = date.getDate();
  const curMonth = translateValue.month[langDate][date.getMonth()];
  const today = `${dayOfWeek} ${dayOfMonth} ${curMonth}`;
  const curSeconds = curDate.getSeconds() < 10 ? `0${curDate.getSeconds()}` : curDate.getSeconds();
  const curMinute = curDate.getMinutes() < 10 ? `0${curDate.getMinutes()}` : curDate.getMinutes();
  curTimeZoneHour = curDate.getHours() + currentTimeZone - (-curDate.getTimezoneOffset() / 60);
  if (curTimeZoneHour > 24) {
    curTimeZoneHour -= 24;
  }

  if (date.getHours() + currentTimeZone - (-curDate.getTimezoneOffset() / 60) > 24) {
    document.querySelector('.block_date_day_local').textContent = `${translateValue.timeLocalZone[LANG.value]} ${
      translateValue.weekShort[langDate][date.getDay() + 1]} ${date.getDate() + 1} ${curMonth}`;
    document.querySelector('.block_time_local').textContent = `${curTimeZoneHour}:${curMinute}:${curSeconds}`;
  } else {
    document.querySelector('.block_date_day_local').textContent = `${translateValue.timeLocalZone[LANG.value]} ${today}`;
    document.querySelector('.block_time_local').textContent = `${curTimeZoneHour}:${curMinute}:${curSeconds}`;
  }
  document.querySelector('.block_date_day').textContent = `${translateValue.timeStandartZone[LANG.value]} ${today}`;
  document.querySelector('.block_time').textContent = `${curDate.getHours()}:${curMinute}:${curSeconds}`;
}

function listenWeather() {
  message.lang = LANG.value;
  message.rate = 0.8;
  messageSecond.lang = LANG.value;
  messageSecond.rate = 0.8;
  if (LANG.value === 'en') {
    message.rate = 0.6;
    messageSecond.rate = 0.6;
  }
  message.text = `${translateValue.today[LANG.value]} ${document.querySelector('.summary').textContent}.
  ${translateValue.tempToday[LANG.value]} ${tempToday.textContent} ${translateValue.degrees[LANG.value]}.
  ${translateValue.feel[LANG.value]} ${apparentTemp.textContent} ${translateValue.degrees[LANG.value]}.
  ${translateValue.speed[LANG.value]} ${windData.textContent} ${translateValue.metrSec[LANG.value]}.`;
  messageSecond.text = `${translateValue.humidity[LANG.value]} ${humidityData.textContent}
  ${translateValue.percent[LANG.value]}. ${translateValue.precipitation[LANG.value]} 
  ${precipitationData.textContent} ${translateValue.millimeters[LANG.value]}. 
  ${translateValue.atmPressure[LANG.value]} ${pressureData.textContent} ${translateValue.presMillimeters[LANG.value]}.`;
  synth.speak(message);
  synth.speak(messageSecond);
}

message.onstart = function () {
  LISTEN_BTN.classList.add('listen_active');
};
messageSecond.onend = function () {
  LISTEN_BTN.classList.remove('listen_active');
};

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
  try {
    const url = `${imgApi}${random}&query=nature,beautiful,${dateHour}&client_id=${imgApiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    const imgUrl = data.urls.regular;
    REFRESH.classList.add('active_refresh');
    setTimeout(activeClassResresh, 1000);
    BODY.style.backgroundImage = `url('${imgUrl}')`;
  } catch (error) {
    console.log('Rate Limit Exceeded. 50 запросов в час.');
    BODY.style.backgroundImage = `url(./img/wrapper-bg.jpg)`;
  }
}

function changeWeek() {
  tempNumberWeek = numberWeek;
  if (date.getHours() + currentTimeZone > 24) {
    numberWeek += 1;
  }
  dayWeekWeather.forEach((e) => {
    if (numberWeek === 6) {
      numberWeek = 0;
    } else {
      numberWeek += 1;
    }
    e.textContent = translateValue.weekLong[langDate][numberWeek];
  });
  numberWeek = tempNumberWeek;
}


function changeTemp() {
  localStorage.setItem('temp', document.querySelector('.active_temp').textContent);
}

function changeLang() {
  localStorage.setItem('lang', LANG.value);
  langDate = LANG.value;
  return langDate;
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

function changeTempToCelsius() {
  F_TEMP.classList.remove('active_temp');
  C_TEMP.classList.add('active_temp');
  TEMP_BTN = document.querySelector('.active_temp');
  changeTemp();
  const toCelsius = Math.round(((Math.round(tempToday.textContent) - 32) * 5) / 9);
  const toCelsiusApparent = Math.round(((Math.round(apparentTemp.textContent) - 32) * 5) / 9);

  tempToday.textContent = toCelsius;
  apparentTemp.textContent = toCelsiusApparent;

  tempDay.forEach((e) => {
    e.textContent = Math.round(((Math.round(e.textContent) - 32) * 5) / 9);
  });
}

async function getNameLocation() {
  changeLang();
  changeWeek();
  inputValue = NAME_LOCATION.textContent;
  const url = `${geoApi}${inputValue}${geoApiKey}&language=${langDate}&pretty=1`;
  const res = await fetch(url);
  const data = await res.json();
  const delComma = data.results[0].formatted.indexOf(',');
  const nameCity = data.results[0].formatted.slice(0, delComma);
  NAME_LOCATION.textContent = `${nameCity}, ${data.results[0].components.country}`;
  inputValue = '';
}

function translate() {
  synth.cancel();
  LISTEN_BTN.classList.remove('listen_active');
  INPUT.placeholder = translateValue.placeholder[LANG.value];
  SEARCH_BTN.textContent = translateValue.search[LANG.value];
  getNameLocation();
  if (Object.prototype.hasOwnProperty.call(translateValue.summary, summaryData)) {
    summaryToday.textContent = `${translateValue.summary[summaryData][LANG.value]}`;
    apparentToday.textContent = `${translateValue.feel[LANG.value]}`;
    windToday.textContent = `${translateValue.wind[LANG.value]} ${windData.textContent} ${translateValue.windValue[LANG.value]}`;
    humidityToday.textContent = `${translateValue.humidity[LANG.value]} ${humidityData.textContent}%`;
    precipitationToday.textContent = `${translateValue.precipitation[LANG.value]} ${precipitationData.textContent} ${translateValue.precipitationValue[LANG.value]}`;
    pressureToday.textContent = `${translateValue.pressure[LANG.value]} ${pressureData.textContent} ${translateValue.pressureValue[LANG.value]}`;
    latitude.textContent = `${translateValue.lat[LANG.value]}${LAT_FIELD.textContent}`;
    longitude.textContent = `${translateValue.lng[LANG.value]}${LNG_FIELD.textContent}`;
  }
}

async function getWeather() {
  numberWeek = date.getDay();
  ChangeLink();
  changeWeek();
  LISTEN_BTN.classList.remove('listen_active');
  VOICE_BTN.classList.remove('micro_active');
  synth.cancel();
  const url = `${weatherApi}lat=${locationData.lat}&lon=${locationData.lon}${weatherApiField}&apikey=${weatherApiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  const weather = data[0].weather_code.value;
  const feel = Math.round(data[0].feels_like[1].max.value);
  const temp = Math.round(data[0].temp[1].max.value);
  const wind = data[0].wind_speed[1].max.value.toFixed(1);
  const precipitation = data[0].precipitation[0].max.value.toFixed(2);
  const humidity = Math.round(data[0].humidity[0].min.value);
  const pressure = Math.round((((data[0].baro_pressure[1].max.value) / 133.3224) * 100));

  tempToday.textContent = temp;
  summaryData = weather;
  apparentTemp.textContent = feel;
  windData.textContent = wind;
  humidityData.textContent = humidity;
  precipitationData.textContent = precipitation;
  pressureData.textContent = pressure;
  imgWeatherToday.innerHTML = svgImage[weather];

  translate();
  let indexTemp = 1;
  tempDay.forEach((e) => {
    e.textContent = Math.round(data[indexTemp].temp[1].max.value);
    indexTemp += 1;
  });

  weatherImg.forEach((e) => {
    imgWeatherDay = data[indexTemp].weather_code.value;
    e.innerHTML = svgImage[imgWeatherDay];
    indexTemp += 1;
  });

  if (localStorage.getItem('temp') === 'F°') {
    changeTempToFahrenheit();
  }
}

function getMap() {
  // eslint-disable-next-line no-undef
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: locationData,
    zoom: 8,
    attributionControl: false,
    accessToken: `${mapKey}`,
  });
  // eslint-disable-next-line no-undef
  new mapboxgl.Marker()
    .setLngLat(locationData)
    .addTo(map);
}

async function searchLocation() {
  changeLang();
  if (!inputValue) {
    inputValue = INPUT.value;
  }
  const url = `${geoApi}${inputValue}${geoApiKey}&language=${langDate}&pretty=1`;
  const res = await fetch(url);
  const data = await res.json();
  try {
    if (data.total_results !== 0) {
      LAT_FIELD.textContent = data.results[0].annotations.DMS.lat;
      LNG_FIELD.textContent = data.results[0].annotations.DMS.lng;
      const { lat } = data.results[0].geometry;
      const lon = data.results[0].geometry.lng;
      const delComma = data.results[0].formatted.indexOf(',');
      const nameCity = data.results[0].formatted.slice(0, delComma);
      NAME_LOCATION.textContent = `${nameCity}, ${data.results[0].components.country}`;
      currentTimeZone = +data.results[0].annotations.timezone.offset_string.slice(0, 3);
      const location = {
        lat,
        lon,
      };
      locationData = location;
      getMap();
      getWeather();
      INPUT.placeholder = 'Search city or ZIP';
    } else {
      throw Error();
    }
  } catch (error) {
    console.log(data.status.code, data.status.message);
    INPUT.value = '';
    INPUT.placeholder = 'Invalid request. Please, try again';
  }
  inputValue = '';
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

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// eslint-disable-next-line no-undef
const recognition = new SpeechRecognition();
recognition.interimResults = true;

function speakMovie() {
  if (localStorage.getItem('lang') === 'ru') {
    recognition.lang = 'ru';
  } else if (localStorage.getItem('lang') === 'en') {
    recognition.lang = 'en';
  }
  VOICE_BTN.classList.add('micro_active');
  isSearch = true;
  recognition.start();
  INPUT.value = '';
  recognition.addEventListener('end', () => {
    VOICE_BTN.classList.remove('micro_active');
  });
}

function talk() {
  if (isSearch) {
    if (transValue.includes('forecast') || transValue.includes('прогноз')) {
      listenWeather();
    } else if (transValue.includes('louder') || transValue.includes('громче')) {
      synth.cancel();
      message.volume = 1;
      messageSecond.volume = 1;
      listenWeather();
    } else if (transValue.includes('quieter') || transValue.includes('тише')) {
      synth.cancel();
      message.volume = 0.4;
      messageSecond.volume = 0.4;
      listenWeather();
    } else if (transValue.includes('stop') || transValue.includes('стоп')) {
      synth.cancel();
      LISTEN_BTN.classList.remove('listen_active');
    } else {
      INPUT.value = transValue;
      searchLocation();
    }
  }
  isSearch = false;
}

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  transValue = transcript;
  setTimeout(talk, 1000);
});

function clickEnter(event) {
  if (event.keyCode === 13) {
    searchLocation();
  }
}

REFRESH.addEventListener('click', getWeather);
F_TEMP.addEventListener('click', changeTempToFahrenheit);
C_TEMP.addEventListener('click', changeTempToCelsius);
SEARCH_BTN.addEventListener('click', searchLocation);
INPUT.addEventListener('keydown', clickEnter);
LANG.addEventListener('click', changeLang);
VOICE_BTN.addEventListener('click', speakMovie);
LISTEN_BTN.addEventListener('click', listenWeather);
LANG.addEventListener('change', translate);

window.addEventListener('DOMContentLoaded', () => {
  LANG.options.selectedIndex = 0;
  synth.cancel();
  setInterval(getTime, 1000);
  getUserLocation();
});
