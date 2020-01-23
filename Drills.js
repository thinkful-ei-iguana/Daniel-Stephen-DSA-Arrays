const Array = require('./Daniel-Stephen-DSA-Arrays');

function no2() {
  const arr = new Array;
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);

  console.log(arr.get(0));
  arr.length = 0;
  arr.push(25);
  console.log(arr.get(0));
}
no2();
// 2.1) length = 1, capacity = 3, address = 0
// 2.2) length = 6, capacity = 12, address = 3
// 3.1 a) length = 3, capacity = 12, address = 3
// 3.1 b) The address stays the same for the pop method but the length of the array is decreased. The data is still there but no longer being referenced by the array methods.
// 4.1) memory is configured to only store numbers
// 4.2) Resize increases capacity when the array runs out of allocated space, copying the array to a new location

//5

function URLify(str) {
  const URL = str.split(' ').join('%20');
  return URL;
}

console.log(URLify('tauhida parveen'));
console.log(URLify('www.thinkful.com /tauh ida parv een'));

//6

function lessThan5(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const item = arr.shift();
    if (item >= 5) arr.push(item);
  }
  return arr;
}
console.log(lessThan5([12, 11, 10, 7, 3,2,1, 11]));