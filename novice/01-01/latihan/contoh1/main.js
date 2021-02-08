console.log("Selamat Pagi");
document.getElementById ("oke").innerHTML="Halo dunia";

//ruang lingkup global
function tambah(a,b){
  //ruang lingkup lokal
  console.log(a+b);
  function oke(){
    console.log("halo");
  }
  oke();
}

//menuliskan value string didalam variabel
var firstName='Tono "hello"';
console.log(firstName);
document.getElementById("halo").innerHTML=firstName;

//pengendalian
var pengendalian=false;
if (pengendalian){

  console.log("Indonesia");
}
else{
  console.log("samudera");
}

//pengenalan variable
  // menggunakan konstanta nilai tidak dapat diubah
  const phi=3.14;
  //menggunakan let, dia tidak dapat di redeclare menggunakan nama variable yang sama. kasusnya adalah saat pendeklarasian pada fungsi global dan fungsi lokal
  let lastName="Saputra";
    console.log(lastName);
  lastName="Saputri";
    console.log(lastName);
  //menggunakan var, dia bisa di declare kembali walaupun di global function sudah di declare dan didalam lokanya juga dideclare
  var middleName="adrian";
    console.log(middleName);
  middleName="adriani";
    console.log(middleName);

//fungsi aritmatika
  //-penjumlahan,pembagian,pengurangan,perkalian,mod,
  //-perbandingan

//cara membuat object di javasscript
let objectPeople={
  name:"adrian fathur",
  age: 24
};
  //cara aksesnya
  console.log(objectPeople.name)



