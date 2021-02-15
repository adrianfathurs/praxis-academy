const { multiply } = require('lodash');
var R = require('ramda');
//Lakukan instalasi dahulu sebelum menggunakan ramda

const greet = R.replace('{name}', R.__, 'Hello, {name}!');
 //=> 'Hello, Alice!'
console.log(greet('Alice'));

/////////////////////////////
const double = x => x * 2;
let a=R.map(double, [1, 2, 3]); //=> [2, 4, 6]
let b=R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}

console.log(a,b);

let c=R.add(2, 3);
console.log(c);
let d=R.multiply(c,c);
console.log(d);
var hit =0;
for (let k = 1; k < 3; k++) {
  hit+=R.add(2, 3);
}

console.log(hit);