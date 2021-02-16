/////////////////////////////////////////////
// Pada Asynchronous ini akan mengekseskusi secara terpecah pecah sesuai dengan fungsi yang dipanggil
// mengapa perlu menggunakan ayncronous karena performa dari asychronous ini sangat baik dan mengerjakan hal yanng mudah ddengan waktu yang singkat daripada mengerjakan suatu hal yang memiliki waktu lama untuk penyelesaiannya
///////////////////////////////////////////

//contoh 1
const kuadrat=(nilai,callback)=>{
  let hasil=nilai*nilai;
  let error=null;
  if(hasil==0){
    error= "Angka Nol Akan Menghasilkan Nilai Nol";
  }
  callback(error,hasil);
}

let nilai=0;

kuadrat(nilai,(error,hasil)=>{
  if(error){
    console.log(error);
  }
  else{
    console.log(hasil);
  }
});

//contoh2
const bilanganGanjil=(nilai,callback)=>{
  let pesan=0;
  let keputusan=false;  
  if(nilai%2!=0){
      pesan=`${nilai} termasuk angka ganjil`;
      keputusan=true;
    }
    else{
      pesan=`${nilai} termasuk angka genap`;
      keputusan=false;
  }
  callback(pesan,nilai,keputusan);
}



bilanganGanjil(nilai,function(pesan,nilai,keputusan){
  if(keputusan){
    console.log(pesan,nilai," => bilangan Ganjil");
  }
  else{
    console.log(pesan,nilai," => bilangan Genap");

  }
})