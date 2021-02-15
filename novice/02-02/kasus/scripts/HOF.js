//contoh penggunaan HOF seperti berikut
/*  Maksud dari Higher Order Function yaitu merupakan fungsi yang menerima value dari fungsi lain sebagai parameternya  dan mengembalikan 
    fungsi lain sebagai keluaraannya
*/
class Hitung{
  constructor(angka1,angka2){
    this.angka1=angka1;
    this.angka2=angka2;
  }

  penjumlahan(){
   var angka=this.angka1+this.angka2;
   return angka;
  }

  perkalian(x){
    return x*x;
  }

}

let hit= new Hitung(2,2);
console.log(hit.perkalian(hit.penjumlahan()));
