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
const systemKeys = [13, 14, 27, 28, 41, 42, 54, 55, 56, 57, 58, 59, 63]

const isCyrillic = function checkLang(text) {
  return /[а-я]/i.test(text);
}

export {
  KEYBOARD_CONTAINER, INPUT, LOADER_CONTAINER, SEARCH_BTN, keyboard, keyboardKeys, systemKeys,
  CLEAR_BTN, KEYBOARD_BTN, RESULT_CONTAINER, DOTS_CONTAINER, VOICE_BTN, isCyrillic, delayDots,
}
