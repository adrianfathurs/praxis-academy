var L =require('lodash');
const { __ } = require('ramda');
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
 
// => objects for ['fred']
let tampil =L.filter(users, function(o) { return o.age>36; });
console.log(tampil);