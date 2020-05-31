const TempToCelsius = function changeTempToCelsius(degress) {
  const toCelsius = Math.round(((Math.round(degress) - 32) * 5) / 9);
  return toCelsius;
};

const TempToFahrenheit = function changeTempToFahrenheit(degress) {
  const toFahr = Math.round(((Math.round(degress) * 9) / 5) + 32);
  return toFahr;
};

module.exports = { TempToCelsius, TempToFahrenheit };
