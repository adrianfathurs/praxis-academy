//////////////////////////////////////
////Asynchronous Async 
/////////////////////////////////////

const promisify= require('util-promisify');

const kuadrat=(nilai,callback)=>{
  let hasil=nilai*nilai;
  let error=null;

  if (hasil==0){
    error="Angka yang kamu kuadratkan bernilai 0";
  }
  callback(error,hasil);
};

const pengkuadratan= promisify(kuadrat);

let nilai=2;
async function kuadratAsyn () {
  try {
    const result= await pengkuadratan(nilai);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
kuadratAsyn();

