const KEYBOARD_CONTAINER = document.getElementById('keyboard_container_movie');
const INPUT = document.getElementById('search_input');
const LOADER_CONTAINER = document.getElementById('loader');
const SEARCH_BTN = document.getElementById('btn');
const CLEAR_BTN = document.querySelector('.clear');
const KEYBOARD_BTN = document.querySelector('.keyboard_icon');
const RESULT_CONTAINER = document.querySelector('.result_field');
const DOTS_CONTAINER = document.querySelector('.dots');
const VOICE_BTN = document.getElementById('btn_voice');
const keyboard = document.createElement('div');
const keyboardKeys = document.createElement('div');
const delayDots = 300;
const systemKeys = [13, 14, 27, 28, 41, 42, 54, 55, 56, 57, 58, 59, 63];
const translateUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?`;
const translateKey = `key=trnsl.1.1.20200502T220917Z.cd9bb434abbf37f3.c07bdee9e96c935d70f599242ba2dd8c64fd0f9b&text=`;
const urlAPI = `https://www.omdbapi.com/?s=`;
const urlAPIkey = `&apikey=24f0fb79`;
const urlAPIrait = `https://www.omdbapi.com/?i=`

const isCyrillic = function checkLang(text) {
  return /[а-я]/i.test(text);
}

export {
  KEYBOARD_CONTAINER, INPUT, LOADER_CONTAINER, SEARCH_BTN, keyboard, keyboardKeys, systemKeys,
  CLEAR_BTN, KEYBOARD_BTN, RESULT_CONTAINER, DOTS_CONTAINER, VOICE_BTN, isCyrillic, delayDots,
  translateUrl, translateKey, urlAPI, urlAPIkey, urlAPIrait,
}
