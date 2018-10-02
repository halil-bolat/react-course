"use strict"

// function Prefixer(prefix){
//   this.prefix = prefix;
// }
//
// Prefixer.prototype.prefixArray = function(Arr){
//   return Arr.map((x) => {
//     console.log(this.prefix + x);
//   });
// }
//
// let pre = new Prefixer('hello ');
// pre.prefixArray(['Brad', 'Jeff']);

// let add = function(a, b){
//   let sum = a+b;
//   console.log(sum);
//   return false;
// }
//
// add(2,2);

let add = (a, b) => {
  let sum = a+b;
  console.log(sum);
  return false;
}

add(2,2);
