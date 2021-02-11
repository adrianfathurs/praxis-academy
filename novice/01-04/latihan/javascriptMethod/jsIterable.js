//Iterable atau yang disebut iterasi adalah suatu perulangan.

//string Iterable
  var paragraf="hello";
  for (let tampil of paragraf){
    console.log(tampil);
  }

//Array Form memanggil sebuah value yang diinginkan menggunakan index real
  let arrayLike={
    0:"Hellow",
    1:"world",
    length:2
  };

  let arr = Array.from(arrayLike);
  console.log(arr);
  console.log(arr.pop());
  console.log(arr);
