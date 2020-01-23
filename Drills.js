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
}
no2();
// length = 1, capacity = 3, address = 0
// length = 6, capacity = 12, address = 3

