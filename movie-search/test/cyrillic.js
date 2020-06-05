const isCyrillic = function checkLang(text) {
  return /[а-я]/i.test(text);
}

module.exports = isCyrillic;
