/* eslint-disable no-unused-vars */
import './styles/style.css';

const objToday = new Date();
const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayOfWeek = weekday[objToday.getDay()];
const dayOfMonth = objToday.getDate();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const curMonth = months[objToday.getMonth()];
const today = `${dayOfWeek} ${dayOfMonth} ${curMonth}`;

const time = setInterval(() => {
  const date = new Date();
  document.querySelector('.block_date_day').innerHTML = `${today}`;
  document.querySelector('.block_time').innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);
