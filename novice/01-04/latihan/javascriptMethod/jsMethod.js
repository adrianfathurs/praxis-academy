var fruits=["apple","blueberry","nanas"];
// penambahan value array menggunakan push,unshift
  //push akan menambahkan value pada akhir array
  fruits.push("tomat");
  console.log(`Setelah dipush : ${fruits}`);
  //unshift akan menambahkan value pada awal array
  fruits.unshift("cabe");
  console.log(`Setelah di Unshift : ${fruits}`);
  //dengan menggunakan Append
  fruits[fruits.length]="Kiwi";
  console.log(`Setelah di Append : ${fruits}`);
/* ---------------------------------------------------------- */  
// menghapus value array terakhir menggunakan pop
  //pop akan menghapus nilai value array paling terakhir
  fruits.pop();
  console.log(`Setelah dipop : ${fruits}`);
  //shift akan menhapus nilai value array paling awal
  fruits.shift();
  console.log(`Setelah dishift : ${fruits}`);
  //delete merupakan fungsi yang digunakan untuk menghapus item array berdasarkan index
  delete fruits[3];
  console.log(`Setelah didelete : ${fruits}`);
/* ------------------------------------------------------------ */
// mengubah value dari array fruit dengan menunjuk value index yang akan diganti
  fruits[0]="Anggur";
  console.log(`Setelah diUbah Value : ${fruits}`);
/* ------------------------------------------------------------ */  
//menghapus dan menambah item pada array menggunakan splice
    let mobil=["tesla","daihatsu","Xenia","Avanza"];
    //cara menambah item
      //paramaeter pertama menunjuk index
      //parameter kedua menujuk item yang akan dihapus
      //prameter ketiga dan seterusnya merupaka parameter untuk menambahkanitem array
    mobil.splice(2,0,"truck","hino");
    console.log(`Tambah Item menggunakan Splice ${mobil}`);
    //cara menghapus item
    //parameter pertama digunakan untuk index yang akan dihapus
    //parameter kedua digunakan untuk menentukan jumlah item yang akan dihapus
    mobil.splice(1,2);
    console.log(`Hapus Item menggunakan Splice ${mobil}`);
/* ------------------------------------------------------------- */
//Merging Array menggunakan concat
  //merge 2 array
  var myGirl=["susi","alsa"];
  var myBoy=["tono","sujarwo"];
  var merge=myGirl.concat(myBoy);
  console.log(merge);
  //merge 3 array
  var parent=["bagus","joko"];
  var merge2=merge.concat(parent);
  console.log(merge2);
/* -------------------------------------------------------------- */
//membagi satu array menjadi array yang berbeda menggunakan slice
  //parameter tersebut menujukan mulai dari mana array tersebut di pisah
  var slice=merge2.slice(4);
  console.log(`Sebelum dislice : ${merge2}`);
  console.log(`hasil slice : ${slice}`);
  //parameter pertama menunjukan mulai dari mana array tersebut dipisah 
  //parameter kedua menunjukan sampai mana array tersebut dipisah
  var slice2=fruits.slice(1,3);
  console.log(`hasil slice : ${slice2}`);
