const { getTimeDay } = require('./getTimeDay');

describe('degrees from Fahrenheit to Celsius', () => {
  test('result night', () => {
    const hourData = new Date('2020-05-31T03:24:00').getHours();
    expect(getTimeDay(hourData)).toBe('night');
  });

  test('result morning', () => {
    const hourData = new Date('2020-05-31T08:56:00').getHours();
    expect(getTimeDay(hourData)).toBe('morning');
  });

  test('result evening', () => {
    const hourData = new Date('2020-05-31T21:24:00').getHours();
    expect(getTimeDay(hourData)).toBe('evening');
  });

  test('result afternoon', () => {
    const hourData = new Date('2020-05-31T13:24:00').getHours();
    expect(getTimeDay(hourData)).toBe('afternoon');
  });
});