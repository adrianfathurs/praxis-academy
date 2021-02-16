////////////////////////////////////////////////////////////
//Asynchronous Promise
////////////////////////////////////////////////////////////

let kuadrat = function(nilai, callback) {
    let hasil = nilai * nilai;
    let error = null;
    
    if (hasil === 0)
        error = 'ngawur! error lagi!';

    callback(error, hasil);
}

const promisify = require('util-promisify');
const kuadratPromise = promisify(kuadrat);

let nilai = 0;

kuadratPromise(nilai)
    .then(hasil => console.log(hasil))
    .catch(error => console.error(error));