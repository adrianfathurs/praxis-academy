"use strict";
function hitung(isi1,isi2){
  let hasil;
  try {
    if(typeof(isi1)=="string" || typeof(isi2)=="string" ){
      throw new Error("Bukan Angka");
    }
    else if( isi1==null || isi2==null){
      throw new Error("Angka Anda Bernilai Null");
    }
    else{
       hasil= isi1+isi2;
      return hasil;
    }
  } catch (error) { 
      console.log("inputan anda 1 :"+ error.message);
      //console.log("inputan anda 1 :"+ error.stack);
      console.log("inputan anda 2 :"+ error);
  }
  finally{
    console.log("AKU MASIH ADA");
  }
}
let result=hitung(2,null);

