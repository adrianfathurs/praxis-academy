//Jangan lupa kalo mau jalanin underscore perlu diinstall dulu
var U = require('underscore');
var evens = U.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);