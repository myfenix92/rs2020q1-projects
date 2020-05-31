const REFRESH = document.getElementById('refresh');
const BODY = document.querySelector('body');
const F_TEMP = document.getElementById('temp-f');
const C_TEMP = document.getElementById('temp-c');
const tempToday = document.querySelector('.temp_today_data');
const summaryToday = document.querySelector('.summary');
const apparentToday = document.querySelector('.apparent_temp');
const windToday = document.querySelector('.wind');
const humidityToday = document.querySelector('.humidity');
const precipitationToday = document.querySelector('.precipitation');
const pressureToday = document.querySelector('.pressure');
const latitude = document.querySelector('.latitude');
const longitude = document.querySelector('.longitude');
const apparentTemp = document.querySelector('.apparent_temp_data');
const windData = document.querySelector('.wind_data');
const humidityData = document.querySelector('.humidity_data');
const imgWeatherToday = document.querySelector('.img_weather');
const tempDay = document.querySelectorAll('.day_temp_data');
const weatherImg = document.querySelectorAll('.weather_day');
const NAME_LOCATION = document.querySelector('.block_city');
const precipitationData = document.querySelector('.precipitation_data');
const pressureData = document.querySelector('.pressure_data');
const INPUT = document.getElementById('input_search');
const LAT_FIELD = document.querySelector('.latitude_data');
const LNG_FIELD = document.querySelector('.longitude_data');
const SEARCH_BTN = document.getElementById('search');
const LANG = document.getElementById('lang');
const VOICE_BTN = document.querySelector('.micro_btn');
const LISTEN_BTN = document.getElementById('listen');
const date = new Date();
const dayWeekWeather = document.querySelectorAll('.day_week');
const synth = window.speechSynthesis;
const message = new SpeechSynthesisUtterance();
const messageSecond = new SpeechSynthesisUtterance();

const imgApi = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=`;
const imgApiKey = `iUWFazITLIp6OVqPGdpqeut-qVTFn_4qW4wtRLr_tGs`;
const geoApi = `https://api.opencagedata.com/geocode/v1/json?q=`;
const geoApiKey = `&key=c22238163fb1499cbd75849a97fd0516`;
const mapKey = `pk.eyJ1IjoibXlmZW5peDkyIiwiYSI6ImNrYXBpdXhwMTF5NTYzMXA2emY0M3pnd24ifQ.I73eBezMUvPr3OAN-aF1Cg`;
const weatherApi = `https://api.climacell.co/v3/weather/forecast/daily?`;
const weatherApiField = `&unit_system=si&start_time=now&fields=feels_like%2Cbaro_pressure%2Cprecipitation%2Cwind_direction%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code`;
const weatherApiKey = `w8d7uc86mLj7gT2pokUPHu6xYLsjRCs4`;


export {
  REFRESH, F_TEMP, BODY, C_TEMP, tempToday, summaryToday, apparentTemp, windData,
  humidityToday, imgWeatherToday, tempDay, weatherImg, NAME_LOCATION, precipitationData,
  pressureData, INPUT, LAT_FIELD, LNG_FIELD, SEARCH_BTN, LANG, VOICE_BTN, LISTEN_BTN,
  date, dayWeekWeather, synth, message, messageSecond, imgApi, imgApiKey, geoApi,
  geoApiKey, mapKey, weatherApi, weatherApiField, weatherApiKey, apparentToday, windToday,
  precipitationToday, pressureToday, latitude, longitude, humidityData,
};
