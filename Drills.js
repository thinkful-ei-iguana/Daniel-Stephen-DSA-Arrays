// const Array = require('./Daniel-Stephen-DSA-Arrays');

// function no2() {
//   const arr = new Array;
//   arr.push(3);
//   arr.push(5);
//   arr.push(15);
//   arr.push(19);
//   arr.push(45);
//   arr.push(10);
//   arr.pop();
//   arr.pop();
//   arr.pop();
//   console.log(arr);

//   console.log(arr.get(0));
//   arr.length = 0;
//   arr.push(25);
//   console.log(arr.get(0));
// }
// no2();
// // 2.1) length = 1, capacity = 3, address = 0
// // 2.2) length = 6, capacity = 12, address = 3
// // 3.1 a) length = 3, capacity = 12, address = 3
// // 3.1 b) The address stays the same for the pop method but the length of the array is decreased. The data is still there but no longer being referenced by the array methods.
// // 4.1) memory is configured to only store numbers
// // 4.2) Resize increases capacity when the array runs out of allocated space, copying the array to a new location

// //5

// function URLify(str) {
//   const URL = str.split(' ').join('%20');
//   return URL;
// }

// console.log(URLify('tauhida parveen'));
// console.log(URLify('www.thinkful.com /tauh ida parv een'));

// //6

// function lessThan5(arr) {
//   const length = arr.length;
//   for (let i = 0; i < length; i++) {
//     const item = arr.shift();
//     if (item >= 5) arr.push(item);
//   }
//   return arr;
// }
// console.log(lessThan5([12, 11, 10, 7, 3,2,1, 11]));

// //7

// function maxSum(arr) {
//   let max = arr[0];
//   for (let i = 1; i <= arr.length; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//       const sum = arr.slice(j, i + j).reduce((sum, num) => sum += num);
//       if(sum > max) {
//         max = sum;
//       }
//     } 
//   }
//   return max;
// }

// console.log(maxSum([4, 6, -3, 5, -2, 1]));

// //8

// function merge(arr1, arr2) {
//   const newArr = [];
//   while (arr1.length && arr2.length) {
//     if(arr1.length === 0 || arr1[0] > arr2[0]) {
//       newArr.push(arr2.shift());
//     } else {
//       newArr.push(arr1.shift());
//     }
//   }
//   return newArr;
// }

// console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9]));

function remChar(str, toRemove) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!toRemove.includes(str[i])) newStr += str[i];
  }
  console.log(newStr);
  return newStr;
}
remChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');

//10

function products(arr) {
  let prod = arr.reduce((prod, num) => prod *= num, 1);
  const newArr = arr.map(num => prod / num);
  return newArr;
}

console.log(products([1, 3, 9, 4]));