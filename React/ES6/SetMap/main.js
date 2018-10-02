"use strict"

// let myArr = [11,22,33,44];
//
// let mySet = new Set(myArr);
//
// mySet.add('100');
// mySet.add({a: 1, b: 2});
// mySet.delete(22);
// mySet.clear();

// console.log(mySet.size);
// console.log(mySet);

// mySet.forEach(function(val) {
//   console.log(val);
// });

// let myMap = new Map([['a1', 'hello'], ['b2', 'bye']]);
// myMap.set('c3', 'foo');
// myMap.delete('a1');
// console.log(myMap);


// let carWeakSet = new WeakSet();
//
// let car1 = {
//   make: 'Honda',
//   model: 'civic'
// }
//
// carWeakSet.add(car1);
//
// let car2 = {
//   make: 'BMW',
//   model: 'M135i'
// }
//
// carWeakSet.add(car2);
//
// carWeakSet.delete(car1);
// console.log(carWeakSet);


let carWeakMap = new WeakMap();

let key1 = {
  id:1
}

let car1 = {
  make: 'BMW',
  model: 'M135i'
}

let key2 = {
  id:2
}

let car2 = {
  make: 'honda',
  model: 'civic'
}

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);

carWeakMap.delete(key2);
console.log(carWeakMap);
