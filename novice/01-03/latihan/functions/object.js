var manusia={
  nama:"Agung",
  age:"12",
  kendaraan:{
    k1:"mustang",
    k2:"musting",
  },
}
console.log(manusia.kendaraan.k1);

//cara diferrensiasi fungsinya untuk mepersingkat kodingan
const {nama,age,kendaraan}=manusia;
console.log(nama);

/* -------------------------------------------------------------------- */
var binatang={
  jeneng:()=>{
    return "jelo"
  },
  umur:40,
}
console.log(binatang.jeneng());
//cara differensiasi fungsi dalam object
const {jeneng,umur}=binatang; 
/* -------------------------------------------------------------------- */
console.log(jeneng());