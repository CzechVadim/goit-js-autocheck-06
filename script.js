/*9. Чистые функции
Задание
Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.
Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
Тесты
    Объявлена функция changeEven(numbers, value).
    Функция changeEven не изменяет значение параметра numbers.
    Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5].
    Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16].
    Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142].
    Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154].
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newArray = [];

  numbers.forEach(element => {
    if (element % 2 === 0) {
      element += value;
    }
    newArray.push(element);
  });

  return newArray;
  // Пиши код выше этой строки
}



/*10. Метод map()
Задание
Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
Тесты
    Объявлена переменная planets.
    Значение переменной planets это массив ['Земля', 'Марс', 'Венера', 'Юпитер'].
    Объявлена переменная planetsLengths.
    Значение переменной planetsLengths это массив [5, 4, 6, 6].
    Для перебора массива планет использован метод map().*/
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => {
  console.log(planet);
  
  return planet.length;
})

console.log(planets);
console.log(planetsLengths);



/*11. Метод map() и массив объектов
Задание
Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
Тесты
    Объявлена переменная books.
    Значение переменной books это массив.
    Объявлена переменная titles.
    Значение переменной titles это массив ['Последнее королевство', 'На берегу спокойных вод', 'Сон смешного человека', 'Красна как кровь', 'Враг Божий'].
    Для перебора массива books используется метод map() как чистая функция.*/
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const titles = books.map(book => {
  console.log(book);

  return book.title;
});
console.log(titles);



/*12. Метод flatMap()
Задание
Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
Тесты
    Объявлена переменная books.
    Значение переменной books это массив объектов.
    Объявлена переменная genres.
    Значение переменной genres это массив [ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ].
    Для перебора массива books используется метод flatMap().*/
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика']
  }
];
// Пиши код ниже этой строки

const genres = books.flatMap(book => {
  console.log(book);

  return book.genres;
});
console.log(genres);



/*13. Задача. Имена пользователей
Задание
Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
Тесты
    Объявлена переменная getUserNames.
    Переменной getUserNames присвоена стрелочная функция с параметром (users).
    Для перебора параметра users используется метод map().
    Вызов функции с указанным массивом пользователей возвращает массив ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony'].
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const getUserNames = users => {
      
  const userNames = users.map(user => user.name);
  
  return userNames;

};
// Пиши код выше этой строки



/*14. Задача. Почты пользователей
Задание
Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
Тесты
    Объявлена переменная getUserNames.
    Переменной getUserNames присвоена стрелочная функция с параметром (users).
    Для перебора параметра users используется метод map().
    Вызов функции с указанным массивом пользователей возвращает массив ['moorehensley@indexia.com', 'sharlenebush@tubesys.com', 'rossvazquez@xinware.com', 'elmahead@omatom.com', 'careybarr@nurali.com', 'blackburndotson@furnigeer.com', 'shereeanthony@kog.com'].
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const getUserEmails = users => {
  
  const userEmails = users.map(user => user.email);
  
  return userEmails;

};
// Пиши код выше этой строки






const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter((number) => {
  console.log(number);
  return number % 2 === 0;
});
console.log(evenNumbers);


const oddNumbers = numbers.filter((number) => {
  return number += 0;
});
console.log(oddNumbers);