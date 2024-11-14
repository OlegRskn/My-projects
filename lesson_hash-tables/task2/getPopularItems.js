// Напишите функцию, которая принимает число n и возвращает n чаще всего
//встречающихся элементов в массиве

const arr1 = [0, 0, 1, 1, 1, 1, 3, 3, 3, 4, 4, 5, 6, 6, 7, 7];
const arr2 = ["dog", "dog", "dog", "cat", "cat", "sheep", "parrot", "parrot"];

const getPopularItems = (arr, n) => {
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
  /* Делаем из map массив пар ключ-значение и сортируем по убыванию*/
  const sorted = [...map].sort((a, b) => b[1] - a[1]);

  // Возвращаем n значений
  return sorted.slice(0, n).map(([key]) => key);
};

console.log(getPopularItems(arr1, 2)); // [1, 3]
console.log(getPopularItems(arr1, 1)); // [1]
console.log(getPopularItems(arr2, 1)); // ['dog']
console.log(getPopularItems(arr2, 3)); // ['dog', 'cat', 'parrot']
