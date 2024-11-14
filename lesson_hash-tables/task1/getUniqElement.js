// Напишите функцию, которая находит уникальный элемент в массиве

const arr1 = [0, 0, 1, 1, 1, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7];
const arr2 = ["dog", "dog", "cat", "cat", "sheep", "parrot", "parrot"];

const getUniqElement = (arr) => {
  const map = new Map();

  /* Сперва добавляем в map элементы массива в кач-ве ключей, 
  и количество их встреч в кач-ве значений*/
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      let counter = map.get(arr[i]);
      map.set(arr[i], counter + 1);
    }
  }

  /* Затем ищем значение равное 1 и возвращаем ключ*/
  for (let [key, value] of map.entries()) {
    if (value === 1) {
      return key; // Отмечу, что тут мы возвращаем только первый элемент, с одним вхождением
    }
  }
};

console.log(getUniqElement(arr1)); // 5
console.log(getUniqElement(arr2)); // 'sheep'
