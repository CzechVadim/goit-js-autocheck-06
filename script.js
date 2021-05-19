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
Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email)
из массива объектов в параметре users.
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





/*16. Фильтрация уникальных элементов
Задание
Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books,
а в переменной uniqueGenres массив уникальных жанров - без повторений.
Тесты
    Объявлена переменная books.
    Значение переменной books это массив объектов.
    Объявлена переменная allGenres.
    Значение переменной allGenres это массив ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы', 'мистика', 'приключения'].
    Объявлена переменная uniqueGenres.
    Значение переменной uniqueGenres это массив ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы'].
    Для вычисления значения переменной allGenders использован метод flatMap().
    Для вычисления значения переменной uniqueGenres использован метод filter().*/
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения']
  }
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);




/*17. Метод filter() и массив объектов
Задание
Используя метод filter() дополни код так, чтобы:
    В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
    В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
Тесты
    Объявлена переменная books.
    Значение переменной books это массив объектов.
    Объявлена переменная MIN_RATING.
    Значение переменной MIN_RATING это число 8.
    Объявлена переменная AUTHOR.
    Значение переменной AUTHOR это строка 'Бернард Корнуэлл'.
    Объявлена переменная topRatedBooks.
    Значение переменной topRatedBooks это массив книг с рейтингов выше 8.
    Объявлена переменная booksByAuthor.
    Значение переменной booksByAuthor это массив книг автор которых 'Бернард Корнуэлл'.
    Для перебора массива books использован метод filter().*/
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
console.log(topRatedBooks);

const booksByAuthor = books.filter((book) => book.author === AUTHOR);
console.log(booksByAuthor);



/*18. Задача. Пользователи с цветом глаз
Задание
Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
Тесты
    Объявлена переменная getUsersWithEyeColor.
    Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color).
    Для перебора параметра users используется метод filter().
    Если значение параметра color это 'blue', функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush и Carey Barr.
    Если значение параметра color это 'green', функция возвращает массив объектов пользователей с именами Ross Vazquez и Elma Head.
    Если значение параметра color это 'brown', функция возвращает массив объектов пользователей с именами Blackburn Dotson и Sheree Anthony.
    Если значение параметра color это любая другая строка, функция возвращает пустой массив.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => {
  const usersEyeColor = users.filter(user => user.eyeColor === color);
  return usersEyeColor;
};
// Пиши код выше этой строки



/*19. Задача. Пользователи в возрастной категории
Задание
Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
Тесты
    Объявлена переменная getUsersWithAge.
    Переменной getUsersWithAge присвоена стрелочная функция с параметрами (users, minAge, maxAge).
    Для перебора параметра users используется метод filter().
    Если значение параметров minAge и maxAge равны 20 и 30 соотвественно, функция возвращает массив объектов пользователей с именами Ross Vazquez, Elma Head и Carey Barr.
    Если значение параметров minAge и maxAge равны 30 и 40 соотвественно, функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony.
    Если значение параметров minAge и maxAge равны 80 и 100 соотвественно, функция возвращает пустой массив.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
  
  const usersAge = users.filter(user => minAge <= user.age && user.age <= maxAge);
  return usersAge;

};
// Пиши код выше этой строки



/*20. Задача. Пользователи с другом
Задание
Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
Тесты
    Объявлена переменная getUsersWithFriend.
    Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName).
    Для перебора параметра users используется метод filter().
    Если значение параметра friendName это строка 'Briana Decker', функция возвращает массив объектов пользователей с именами Sharlene Bush и Sheree Anthony.
    Если значение параметра friendName это строка 'Goldie Gentry', функция возвращает массив объектов пользователей с именами Elma Head и Sheree Anthony.
    Если значение параметра friendName это строка 'Adrian Cross', функция возвращает пустой массив.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
  const userFriends = users.filter(user => user.friends.some(friend => friend === friendName));
  return userFriends; 
};
// Пиши код выше этой строки



/*21. Задача. Список друзей
Задание
Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
Тесты
    Объявлена переменная getFriends.
    Переменной getFriends присвоена стрелочная функция с параметром (users).
    Вызов функции с указанным массивом пользователей возвращает массив ['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman'].
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const getFriends = (users) => {
  const userFriends = 
  users
    .map(user=>user.friends)
    .reduce((allfriends, user) => [...allfriends, ...user], [])
    .filter((elem, index, array) => array.indexOf(elem) === index)
  return userFriends;
};
// Пиши код выше этой строки



/*22. Задача. Активные пользователи
Задание
Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
Тесты
    Объявлена переменная getActiveUsers. Переменной getActiveUsers присвоена стрелочная функция с параметром users.
    Для перебора параметра users используется метод filter().
    Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const getActiveUsers = (users) => {
  const activeUsers = users.filter(user => user.isActive);
  return activeUsers;
};
// Пиши код выше этой строки




/*23. Задача. Неактивные пользователи
Задание
Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
Тесты
    Объявлена переменная getInactiveUsers.
    Переменной getInactiveUsers присвоена стрелочная функция с параметром users.
    Для перебора параметра users используется метод filter().
    Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Moore Hensley, Ross Vazquez и Blackburn Dotson.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
  const inactiveUsers = users.filter(user => !user.isActive);
  return inactiveUsers;
};
// Пиши код выше этой строки



/*24. Метод find()
Задание
Используя метод find() дополни код так, чтобы:
    В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
    В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
Тесты
    Объявлена переменная books.
    Значение переменной books это массив.
    Объявлена переменная BOOK_TITLE.
    Значение переменной BOOK_TITLE это строка 'Сон смешного человека'.
    Объявлена переменная AUTHOR.
    Значение переменной AUTHOR это строка 'Роберт Шекли'.
    Объявлена переменная bookWithTitle.
    Значение переменной bookWithTitle это объект книги с названием выше 'Сон смешного человека'.
    Объявлена переменная bookByAuthor.
    Значение переменной bookByAuthor это объект книги автора 'Роберт Шекли'.
    Для перебора массива books использован метод find().*/
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);



/*25. Задача. Пользователь с почтой
Задание
Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
Тесты
    Объявлена функция getUserWithEmail(users, email).
    Для перебора параметра users используется метод find().
    Если значение параметра email это 'shereeanthony@kog.com', функция возвращает объект пользователя с именем Sheree Anthony.
    Если значение параметра email это 'elmahead@omatom.com', функция возвращает объект пользователя с именем Elma Head.
    Если значение параметра email это 'blackburndotson@furnigeer.com', функция возвращает объект пользователя с именем Blackburn Dotson.
    Если в массиве users нет пользователя с почтой из параметра email, функция возвращает undefined.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
  
  const userEmails = users.find((user) => user.email === email);
  return userEmails; 
  
};
// Пиши код выше этой строки



/*26. Метод every()
Задание
Используя метод every() дополни код так, чтобы:
    В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
    В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
    В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
    В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
    В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
    В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
Тесты
    Объявлена переменная firstArray.
    Значение переменной firstArray это массив [26, 94, 36, 18].
    Объявлена переменная secondArray.
    Значение переменной secondArray это массив [17, 61, 23].
    Объявлена переменная thirdArray.
    Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18].
    Объявлена переменная eachElementInFirstIsEven.
    Значение переменной eachElementInFirstIsEven это буль true.
    Объявлена переменная eachElementInFirstIsOdd.
    Значение переменной eachElementInFirstIsOdd это буль false.
    Объявлена переменная eachElementInSecondIsEven.
    Значение переменной eachElementInSecondIsEven это буль false.
    Объявлена переменная eachElementInSecondIsOdd.
    Значение переменной eachElementInSecondIsOdd это буль true.
    Объявлена переменная eachElementInThirdIsEven.
    Значение переменной eachElementInThirdIsEven это буль false.
    Объявлена переменная eachElementInThirdIsOdd.
    Значение переменной eachElementInThirdIsOdd это буль false.
    Для перебора массивов использован метод every().*/
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(firstArray => firstArray % 2 == 0);
const eachElementInFirstIsOdd = firstArray.every(firstArray => firstArray % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(secondArray => secondArray % 2 == 0);
const eachElementInSecondIsOdd = secondArray.every(secondArray => secondArray % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(thirdArray => thirdArray % 2 == 0);
const eachElementInThirdIsOdd = thirdArray.every(thirdArray => thirdArray % 2 !== 0);



/*27. Задача. Все ли пользователи активны
Задание
Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
Тесты
    Объявлена переменная isEveryUserActive
    Переменной isEveryUserActive присвоена стрелочная функция с параметром (users).
    Для перебора параметра users используется метод every().
    Вызов функции с указанным массивом пользователей возвращает false.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
  const activeUsers = users.every(user => user.isActive);
  return activeUsers; 
};
// Пиши код выше этой строки



/*28. Метод some()
Задание
Используя метод some() дополни код так, чтобы:
    В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
    В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
    В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
    В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
    В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
    В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
Тесты
    Объявлена переменная firstArray.
    Значение переменной firstArray это массив [26, 94, 36, 18].
    Объявлена переменная secondArray.
    Значение переменной secondArray это массив [17, 61, 23].
    Объявлена переменная thirdArray.
    Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18].
    Объявлена переменная anyElementInFirstIsEven.
    Значение переменной anyElementInFirstIsEven это буль true.
    Объявлена переменная anyElementInFirstIsOdd.
    Значение переменной anyElementInFirstIsOdd это буль false.
    Объявлена переменная anyElementInSecondIsEven.
    Значение переменной anyElementInSecondIsEven это буль false.
    Объявлена переменная anyElementInSecondIsOdd.
    Значение переменной anyElementInSecondIsOdd это буль true.
    Объявлена переменная anyElementInThirdIsEven.
    Значение переменной anyElementInThirdIsEven это буль true.
    Объявлена переменная anyElementInThirdIsOdd.
    Значение переменной anyElementInThirdIsOdd это буль true.
    Для перебора массивов использован метод some().*/
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(firstArray => firstArray % 2 == 0);
const anyElementInFirstIsOdd = firstArray.some(firstArray => firstArray % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(secondArray => secondArray % 2 == 0);
const anyElementInSecondIsOdd = secondArray.some(secondArray => secondArray % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(thirdArray => thirdArray % 2 == 0);
const anyElementInThirdIsOdd = thirdArray.some(thirdArray => thirdArray % 2 !== 0);



/*29. Задача. Есть ли активные пользователи
Задание
Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
Тесты
    Объявлена функция isAnyUserActive(users).
    Для перебора параметра users используется метод some().
    Вызов функции с указанным массивом пользователей возвращает true.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const isAnyUserActive = users => {
  const activeUsers = users.some(user => user.isActive);
  return activeUsers; 
};
// Пиши код выше этой строки   



/*30. Метод reduce()
Задание
Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
Тесты
    Объявлена переменная players.
    Значение переменной players это объект игроков с игровым временем каждого.
    Объявлена переменная playtimes.
    Значение переменной playtimes это массив [1270, 468, 710, 244].
    Объявлена переменная totalPlayTime.
    Значение переменной totalPlayTime это число 2692.
    Для перебора массива playtimes используется метод reduce().
    Объявлена переменная averagePlayTime.
    Значение переменной averagePlayTime это число 673.*/
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((acc, value) => {
  return acc + value;                               
});

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;



/*31. Метод reduce() и массив объектов
Задание
Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
Тесты
    Объявлена переменная players.
    Значение переменной players это массив объектов игроков.
    Объявлена переменная totalAveragePlaytimePerGame.
    Значение переменной totalAveragePlaytimePerGame это число 1023.
    Для перебора массива players используется метод reduce().*/
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce(
  (totalTime, {playtime, gamesPlayed}) =>
  totalTime + playtime / gamesPlayed, 0,);
console.log(totalAveragePlaytimePerGame);



/*32. Задача. Общий баланс пользователей
Задание
Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
Тесты
    Объявлена переменная calculateTotalBalance.
    Переменной calculateTotalBalance присвоена стрелочная функция с параметром (users).
    Для перебора параметра users используется метод reduce().
    Вызов функции с указанным массивом пользователей возвращает число 20916.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const calculateTotalBalance = users => {
  const totalBalance = users.reduce (
    (total, {balance}) =>
     total + balance, 0,);
  return totalBalance;
};
// Пиши код выше этой строки




/*33. Задача. Общее количество друзей
Задание
Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
Тесты
    Объявлена переменная getTotalFriendCount.
    Переменной getTotalFriendCount присвоена стрелочная функция с параметром (users).
    Для перебора параметра users используется метод reduce().
    Вызов функции с указанным массивом пользователей возвращает число 14
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  const totalFriends = users.reduce ((total, user) => total + user.friends.length, 0);
  return totalFriends;
};
// Пиши код выше этой строки



/*34 Метод sort()
Задание
Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
Тесты
    Объявлена переменная releaseDates.
    Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997].
    Объявлена переменная authors.
    Значение переменной authors это массив ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский'].
    Объявлена переменная ascendingReleaseDates.
    Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016].
    Объявлена переменная alphabeticalAuthors.
    Значение переменной alphabeticalAuthors это массив ['Бернард Корнуэлл', 'Ли Танит', 'Роберт Шекли', 'Федор Достоевский'].
    Использован метод sort().*/
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((currentDates, nextDates) => {
  return currentDates - nextDates;
});

const alphabeticalAuthors = [...authors].sort((currentAuthors, nextAuthors) => {
  const result = currentAuthors[0] > nextAuthors[0];
  
  if (result) {
    return 1;
  }
  
    if (!result) {
    return -1;
  }
});



/*35. Свой порядок сортировки чисел
Задание
Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
Тесты
    Объявлена переменная releaseDates.
    Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997].
    Объявлена переменная ascendingReleaseDates.
    Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016].
    Объявлена переменная descendingReleaseDates.
    Значение переменной descendingReleaseDates это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967].
    Использован метод sort().*/
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((currentDates, nextDates) => {
  return currentDates - nextDates;
});

const descendingReleaseDates = [...releaseDates].sort((currentDates, nextDates) => {
  return nextDates - currentDates;
});



/*36. Свой порядок сортировки строк
Задание
Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
Тесты
    Объявлена переменная authors.
    Значение переменной authors это массив ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский', 'Говард Лавкрафт'].
    Объявлена переменная authorsInAlphabetOrder.
    Значение переменной authorsInAlphabetOrder это массив ['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит', 'Роберт Шекли', 'Федор Достоевский'].
    Объявлена переменная authorsInReversedOrder.
    Значение переменной authorsInReversedOrder это массив ['Федор Достоевский', 'Роберт Шекли', 'Ли Танит', 'Говард Лавкрафт', 'Бернард Корнуэлл'].
    Использован метод sort().*/
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт'
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((currentAuthors, nextAuthors) => {
const result = currentAuthors[0] > nextAuthors[0];

if (result) {
  return 1;
}

  if (!result) {
  return -1;
}
});

const authorsInReversedOrder = [...authors].sort((currentAuthors, nextAuthors) => {
const result = currentAuthors[0] > nextAuthors[0];

if (result) {
  return -1;
}

  if (!result) {
  return 1;
}
});


/*37. Сортировка объектов
Задание
Дополни код так, чтобы:
    В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
    В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
    В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
    В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
Тесты
    Объявлена переменная books.
    Значение переменной books это исходный массив объектов книг.
    Объявлена переменная sortedByAuthorName.
    Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном порядке.
    Объявлена переменная sortedByReversedAuthorName.
    Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени автора в обратном алфавитном порядке.
    Объявлена переменная sortedByAscendingRating.
    Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга.
    Объявлена переменная sortedByDescentingRating.
    Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга.
    Для перебора массива books используется метод sort().*/
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort(
  (currentAuthor, nextAuthor) => currentAuthor.author.localeCompare(nextAuthor.author)
);

const sortedByReversedAuthorName = [...books].sort(
  (currentAuthor, nextAuthor) => nextAuthor.author.localeCompare(currentAuthor.author)
);

const sortedByAscendingRating = [...books].sort((currentRating, nextRating) => {
  return currentRating.rating - nextRating.rating;
});

const sortedByDescentingRating = [...books].sort((currentRating, nextRating) => {
  return nextRating.rating - currentRating.rating;
щ});



/*38. Задача. Сортировка по балансу
Задание
Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
Тесты
    Объявлена переменная sortByAscendingBalance.
    Переменной sortByAscendingBalance присвоена стрелочная функция с параметром (users).
    Значение параметра users не изменяется.
    Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по возрастанию их баланса.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
    Для перебора параметра users использован метод sort().*/
// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
  
  const userBalance = [...users].sort((currentBalance, nextBalance) => currentBalance.balance - nextBalance.balance);
  return userBalance;
  
};
// Пиши код выше этой строки



/*39. Задача. Сортировка по количеству друзей
Задание
Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
Тесты
    Объявлена переменная sortByDescendingFriendCount.
    Переменной sortByDescendingFriendCount присвоена стрелочная функция с параметром (users).
    Значение параметра users не изменяется.
    Для перебора параметра users использован метод sort().
    Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по убыванию количества их друзей.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
  
  const countFriend = [...users].sort((currentFriend, nextFriend) => nextFriend.friends.length - currentFriend.friends.length);
  return countFriend;

};
// Пиши код выше этой строки




/*40. Задача. Сортировка по имени
Задание
Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
Тесты
    Объявлена переменная sortByName.
    Переменной sortByName присвоена стрелочная функция с параметром (users).
    Значение параметра users не изменяется.
    Для перебора параметра users использован метод sort().
    Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по имени в алфавитном порядке.
    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/
// Пиши код ниже этой строки
const sortByName = users => {
  
  const userName = [...users].sort(
  (currentName, nextName) => currentName.name.localeCompare(nextName.name));
  return userName;
  
};
// Пиши код выше этой строки


/*41 Цепочки методов (чейнинг, chaining)
Задание
Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
Тесты
    Объявлена переменная books.
    Значение переменной books это исходный массив объектов.
    Объявлена переменная MIN_BOOK_RATING.
    Значение переменной MIN_BOOK_RATING это число 8.
    Объявлена переменная names.
    Значение переменной names это массив ['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит', 'Роберт Шекли'].
    Нет объявленых переменных кроме books, MIN_BOOK_RATING и names.
    Используется цепочка методов filter, map, sort.*/
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books]
  .sort((currentAuthor, nextAuthor) => currentAuthor.author.localeCompare(nextAuthor.author))
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  
  console.log(names);


