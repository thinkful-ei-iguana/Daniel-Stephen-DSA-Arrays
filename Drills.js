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
// 2.1) length = 1, capacity = 3, address = 0
// 2.2) length = 6, capacity = 12, address = 3
// 3.1 a) length = 3, capacity = 12, address = 3
// 3.1 b) The address stays the same for the pop method but the length of the array is decreased. The data is still there but no longer being referenced by the array methods.
