// Напишите функцию, которая находит все подстроки с уникальными элементами в массиве
// и возвращает их количество
const arr = [10, 8, 3, 2, 3, 1, 2, 1, 5, 6, 8, 9, 4, 3, 2, 4, 7, 8, 6, 43, 1];

const getAllSubUniqArr = (arr) => {
  let count = 0;
  const set = new Set();

  for (let left = 0; left < arr.length; left++) {
    set.clear();

    for (let right = left; right < arr.length; right++) {
      if (set.has(arr[right])) break;

      set.add(arr[right]);
      count++;
    }
  }

  return count;
};

console.log(getAllSubUniqArr(arr)); // 13
