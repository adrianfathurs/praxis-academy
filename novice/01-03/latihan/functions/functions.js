// cara menjalankan program ini yaitu dengan memanggil node file.js
const nama=()=>{
  return "agung";
}

var roda=4;
  //pengecekan apakah inputannya integer atau bukan
  if(typeof(roda)=="number"){ 
    //pengecekan roda
    if(roda==2){
      hasil=motor();
      console.log(hasil);
    }
    else if(roda==4){
      hasil=mobil();
      var m1=nama();
      console.log(hasil);
      console.log(m1);
    }
  }
  else{
    console.log("Bukan Integer");
  }

/*/funtion motor/ */
function motor(roda){
  return `roda motor : ${roda}`;
}
/* function mobil */
function mobil(){
  return `roda mobil : ${roda}` ;
}



