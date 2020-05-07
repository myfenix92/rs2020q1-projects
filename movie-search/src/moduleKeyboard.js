import './styles/style_keyboard.css';
import {
  KEYBOARD_CONTAINER, INPUT, keyboard, keyboardKeys, systemKeys,
} from './moduleConst';
import dictionary from './moduleDictionary';

let langValue = localStorage.getItem('lang') || 'en';
let keyCaps;
let keyShift;
let key = '';
let numberSystemKey = 0;

export default function initKeyboard() {
  keyboard.classList.add('keyboard');
  keyboardKeys.id = 'keyboard_keys';

  keyboardKeys.append(createKeys());
  keyboard.append(keyboardKeys);
  changeKeyboard(key, langValue, keyCaps);
  KEYBOARD_CONTAINER.append(keyboard);
}

keyboard.addEventListener('mouseup', (event) => onMouseUp(event));
keyboard.addEventListener('mousedown', (event) => onMouseDown(event));
document.addEventListener('mouseout', (event) => onMouseOut(event));

function systemKeyClick(event) {
  const { value: textValue, selectionStart: textAreaStart, selectionEnd: textAreaEnd } = INPUT;
  switch (event) {
    case 'Tab':
      INPUT.value += '\t';
      break;
    case 'Space':
      INPUT.value += ' ';
      break;
    case 'Backspace':
      if (textAreaStart !== 0) {
        INPUT.value = `${textValue.substring(0, textAreaStart - 1)}${textValue.substring(textAreaStart)}`;
        PosCursor(textAreaStart - 1);
      }
      break;
    case 'Delete':
    case 'Del':
      if (textAreaEnd !== textValue.length) {
        INPUT.value = `${textValue.substring(0, textAreaStart)}${textValue.substring(textAreaStart + 1)}`;
        PosCursor(textAreaStart);
      }
      break;
    case '▲':
      PosCursor(0);
      break;
    case '▼':
      PosCursor(textValue.length);
      break;
    case '◄':
      PosCursor(textAreaStart - 1);
      break;
    case '►':
      PosCursor(textAreaStart + 1);
      break;
    default:
  }
}

function onMouseOut(event) {
  if (event.relatedTarget !== 'BUTTON') {
    event.target.classList.remove('active');
  }
}

function onMouseDown(event) {
  event.preventDefault();
  let cursor;
  if (event.target.tagName === 'BUTTON' && event.target.dataset.name !== 'search' && event.target.dataset.name !== 'voice') {
    event.target.classList.add('active');
    const keyValue = event.target.textContent;
    systemKeyClick(event.target.textContent);
    switch (keyValue) {
      case 'CapsLock':
        if (keyCaps) {
          keyCaps = false;
        } else {
          keyCaps = true;
        }
        changeKeyboard(key, langValue, keyShift, keyCaps);
        INPUT.value += '';
        break;
      case 'Shift':
        if (keyShift) {
          keyShift = false;
        } else {
          keyShift = true;
        }
        changeKeyboard(key, langValue, keyShift, keyCaps);
        INPUT.value += '';
        break;
      case 'Ru/Eng': {
        changeLang();
        break;
      }
      case 'Backspace':
      case 'Tab':
      case 'Del':
      case 'Alt':
      case 'Ctrl':
      case 'Space':
      case '▲':
      case '◄':
      case '▼':
      case '►':
      case 'Search':
      case 'Enter':
        INPUT.value += '';
        break;
      default:
        cursor = INPUT.selectionStart + 1;
        INPUT.value = `${INPUT.value.substring(0, INPUT.selectionStart)}${keyValue}${INPUT.value.substring(INPUT.selectionEnd, INPUT.value.length)}`;
        PosCursor(cursor);
    }
  }
}

function onMouseUp(event) {
  INPUT.focus();
  event.preventDefault();
  if (event.target.tagName === 'BUTTON') {
    event.target.classList.remove('active');
  }
}

function PosCursor(position) {
  INPUT.focus();
  INPUT.selectionStart = position;
  INPUT.selectionEnd = position;
}

function changeLang() {
  langValue = langValue === 'en' ? 'ru' : 'en';
  localStorage.setItem('lang', langValue);
  changeKeyboard(key, langValue, keyShift, keyCaps);
}

function changeKeyboard(keys, lang, isShift, isCaps) {
  numberSystemKey = 0;
  for (key in dictionary) {
    if (!isCaps && !isShift) {
      keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key][lang];
    } else if (isCaps && !isShift) {
      if (systemKeys.some((item) => item === numberSystemKey)) {
        keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key][lang];
      } else {
        keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key][lang].toUpperCase();
      }
    } else if (isShift && !isCaps) {
      keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key].shift[lang];
    } else if (isShift && isCaps) {
      if (systemKeys.some((item) => item === numberSystemKey)) {
        keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key][lang];
      } else {
        keyboard.querySelectorAll('button')[numberSystemKey].textContent = dictionary[key].shift[lang].toLowerCase();
      }
    }
    numberSystemKey += 1;
  }
  return keys;
}

function createKeys() {
  const fragment = document.createDocumentFragment();
  for (const el in dictionary) {
    const keyCreate = document.createElement('button');
    keyCreate.setAttribute('type', 'button');
    switch (el) {
      case 'Backspace':
      case 'Enter':
      case 'ShiftLeft':
      case 'ShiftRight':
        keyCreate.classList.add('key');
        keyCreate.classList.add('key_middle-wide');
        break;

      case 'Tab':
      case 'MetaLeft':
        keyCreate.classList.add('key');
        keyCreate.classList.add('key_meta');
        break;

      case 'Space':
        keyCreate.classList.add('key');
        keyCreate.classList.add('key_extra-wide');
        break;

      case 'AltRight':
      case 'AltLeft':
      case 'ControlRight':
      case 'ControlLeft':
      case 'Delete':
        keyCreate.classList.add('key');
        keyCreate.classList.add('key_wide');
        break;
      case 'CapsLock':
        keyCreate.classList.add('key');
        keyCreate.classList.add('key_capslock');
        break;
      default:
        keyCreate.classList.add('key');
    }

    fragment.append(keyCreate);
  }
  return fragment;
}
