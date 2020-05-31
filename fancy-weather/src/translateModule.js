const translateValue = {
  placeholder: {
    en: 'Search city or ZIP',
    ru: 'Поиск города или индекса',
    be: 'Пошук горада ці індэкса',
  },
  search: {
    en: 'Search',
    ru: 'Поиск',
    be: 'Пошук',
  },
  summary: {
    clear: {
      en: 'Clear',
      ru: 'Ясно',
      be: 'Ясна',
    },
    cloudy: {
      en: 'Cloudy',
      ru: 'Облачно',
      be: 'Воблачна',
    },
    drizzle: {
      en: 'Drizzle',
      ru: 'Моросящий дождь',
      be: 'Дробны дождж',
    },
    flurries: {
      en: 'Flurries',
      ru: 'Порывы ветра',
      be: 'Парывы ветру',
    },
    fog_light: {
      en: 'Fog light',
      ru: 'Небольшой туман',
      be: 'Невялікі туман',
    },
    fog: {
      en: 'Fog',
      ru: 'Туман',
      be: 'Туман',
    },
    freezing_drizzle: {
      en: 'Freezing drizzle',
      ru: 'Изморозь',
      be: 'Шэрань',
    },
    freezing_rain_heavy: {
      en: 'Freezing rain heavy',
      ru: 'Сильный ледяной дождь',
      be: 'Моцны ледзяны дождж',
    },
    freezing_rain_light: {
      en: 'Freezing rain light',
      ru: 'Небольшой ледяной дождь',
      be: 'Невялікі ледзяны дождж',
    },
    freezing_rain: {
      en: 'Freezing rain',
      ru: 'Ледяной дождь',
      be: 'Ледзяны дождж',
    },
    ice_pellets_heavy: {
      en: 'Ice pellets heavy',
      ru: 'Сильный град',
      be: 'Моцны град',
    },
    ice_pellets_light: {
      en: 'Ice pellets light',
      ru: 'Небольшой град',
      be: 'Невялікі град',
    },
    ice_pellets: {
      en: 'Ice pellets',
      ru: 'Град',
      be: 'Град',
    },
    mostly_clear: {
      en: 'Mostly clear',
      ru: 'В основном ясно',
      be: 'У асноўным ясна',
    },
    mostly_cloudy: {
      en: 'Mostly cloudy',
      ru: 'В основном облачно',
      be: 'У асноўным воблачна',
    },
    partly_cloudy: {
      en: 'Partly cloudy',
      ru: 'Переменная облачность',
      be: 'Пераменная воблачнасць',
    },
    rain_heavy: {
      en: 'Rain heavy',
      ru: 'Сильный дождь',
      be: 'Моцны дождж',
    },
    rain_light: {
      en: 'Rain light',
      ru: 'Небольшой дождь',
      be: 'Невялікі дождж',
    },
    rain: {
      en: 'Rain',
      ru: 'Дождь',
      be: 'Дождж',
    },
    snow_heavy: {
      en: 'Snow heavy',
      ru: 'Сильный снегопад',
      be: 'Моцны снегапад',
    },
    snow_light: {
      en: 'Snow light',
      ru: 'Небольшой снегопад',
      be: 'Невялікі снегапад',
    },
    snow: {
      en: 'Snow',
      ru: 'Снегопад',
      be: 'Снегапад',
    },
    tstorm: {
      en: 'Thunderstorm',
      ru: 'Гроза',
      be: 'Навальніца',
    },
  },
  feel: {
    en: 'Feels Like: ',
    ru: 'Ощущается как: ',
    be: 'Адчуваецца як: ',
  },
  wind: {
    en: 'Wind: ',
    ru: 'Ветер: ',
    be: 'Вецер: ',
  },
  humidity: {
    en: 'Humidity: ',
    ru: 'Влажность: ',
    be: 'Вільготнасць: ',
  },
  precipitation: {
    en: 'Precipitation: ',
    ru: 'Осадки: ',
    be: 'Ападкаў: ',
  },
  pressure: {
    en: 'Pressure: ',
    ru: 'Давление: ',
    be: 'Ціск: ',
  },
  lat: {
    en: 'Latitude: ',
    ru: 'Широта: ',
    be: 'Шырата: ',
  },
  lng: {
    en: 'Longitude: ',
    ru: 'Долгота: ',
    be: 'Даўгата: ',
  },
  weekLong: {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    be: ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацверг', 'Пятнiца', 'Субота'],
  },
  weekShort: {
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    be: ['Нд', 'Пн', 'Аў', 'Ср', 'Чц', 'Пт', 'Сб'],
  },
  month: {
    en: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ],
    ru: [
      'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
      'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',
    ],
    be: [
      'Студзеня', 'Лютага', 'Сакавіка', 'Красавіка', 'Мая', 'Чэрвеня',
      'Ліпеня', 'Аўгуста', 'Верасеня', 'Кастрычніка', 'Лістапада', 'Снежаня',
    ],
  },
  windValue: {
    en: 'm/s',
    ru: 'м/с',
    be: 'м/с',
  },
  precipitationValue: {
    en: 'mm',
    ru: 'мм',
    be: 'мм',
  },
  pressureValue: {
    en: 'mmHg',
    ru: 'мм.рт.ст.',
    be: 'мм.рт.сл.',
  },
  today: {
    en: 'Today is',
    ru: 'Сегодня',
    be: 'Сёння',
  },
  tempToday: {
    en: 'Temperature now',
    ru: 'Температура сейчас',
    be: 'Тэмпература зараз',
  },
  degrees: {
    en: 'degrees',
    ru: 'градуса',
    be: 'градусу',
  },
  speed: {
    en: 'Wind speed',
    ru: 'Скорость ветра',
    be: 'Хуткасьць ветру',
  },
  metrSec: {
    en: 'meters per second',
    ru: 'метров в секунду',
    be: 'метраў у секунду',
  },
  percent: {
    en: 'percent',
    ru: 'процента',
    be: 'адсоткаў',
  },
  millimeters: {
    en: 'millimeters',
    ru: 'миллиметров',
    be: 'міліметраў',
  },
  atmPressure: {
    en: 'Atmosphere pressure',
    ru: 'Атмосферное давление',
    be: 'Атмасферны ціск',
  },
  presMillimeters: {
    en: 'millimeters of mercury',
    ru: 'миллиметров ртутного столба',
    be: 'міліметраў ртутнага слупа',
  },
  timeLocalZone: {
    en: 'Local time: ',
    ru: 'Местное время: ',
    be: 'Мясцовае час: ',
  },
  timeStandartZone: {
    en: 'Your time: ',
    ru: 'Ваше время: ',
    be: 'Ваш час: ',
  },
};

export default translateValue;
