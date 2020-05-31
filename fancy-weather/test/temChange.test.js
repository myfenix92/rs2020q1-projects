const { TempToCelsius, TempToFahrenheit } = require('./tempChange');

describe('degrees from Fahrenheit to Celsius', () => {
  test('result -16 degress', () => {
    const degress = 3;
    expect(TempToCelsius(degress)).toBe(-16);
  });

  test('result 32 degress', () => {
    const degress = 89;
    expect(TempToCelsius(degress)).toBe(32);
  });

  test('result 2 degress', () => {
    const degress = 34.6;
    expect(TempToCelsius(degress)).toBe(2);
  });

  test('result -31 degress', () => {
    const degress = -24;
    expect(TempToCelsius(degress)).toBe(-31);
  });
});

describe('degrees from Celsius to Fahrenheit', () => {
  test('result 3 degress', () => {
    const degress = -16;
    expect(TempToFahrenheit(degress)).toBe(3);
  });

  test('result 90 degress', () => {
    const degress = 32;
    expect(TempToFahrenheit(degress)).toBe(90);
  });

  test('result 34 degress', () => {
    const degress = 1;
    expect(TempToFahrenheit(degress)).toBe(34);
  });

  test('result -24 degress', () => {
    const degress = -31;
    expect(TempToFahrenheit(degress)).toBe(-24);
  });
});
