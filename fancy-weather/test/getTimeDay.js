const getTimeDay = function getTimeDay(hourData) {
  let timeDay;
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
};

module.exports = { getTimeDay };
