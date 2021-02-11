//kamus bahasa inggris
let indoToInggris = new Map();
indoToInggris.set("aku","I'm");
indoToInggris.set("dia","You");


const translateInggris=()=>{
  var bhsIndonesia= document.getElementById("bhsIndonesia").value;//aku
  if(indoToInggris.has(bhsIndonesia)){
    let translateIng=indoToInggris.get(bhsIndonesia);
    var box=document.getElementById('box1');
    var paragraf=document.createElement('p');
    var text=document.createTextNode(`Kata ${bhsIndonesia} artinya ${translateIng}`);
    console.log(text);
    box.appendChild(paragraf);
    paragraf.appendChild(text);
  }
  else{
    alert("Anda Belum Memasukan kata")
  }
}

//kamus bahasa Indonesia
let inggrisToIndo=new Map();
inggrisToIndo.set("im","aku");
inggrisToIndo.set("you","dia");

const translateIndonesia=()=>{
  var bhsInggris= document.getElementById("bhsInggris").value;
  if(inggrisToIndo.has(bhsInggris)){
    let translateIndo=inggrisToIndo.get(bhsInggris);
    var paragraf=document.createElement('p');
    var text=document.createTextNode(`Kata ${bhsInggris} artinya ${translateIndo}`);
    var box=document.getElementById('box2');
    console.log(text);
    paragraf.appendChild(text);
    box.appendChild(paragraf);
  }
  else{
    alert("Anda Belum Memasukan kata")
  }
}

//tambah kamus bahasa Indonesia
const tambahKamusIndo=()=>{
  var bhsIndonesia= document.getElementById("bhsIndonesia").value;
  var bhsInggris= document.getElementById("bhsInggris").value;
  if(indoToInggris.has(bhsIndonesia)){
    alert("Sudah Terdapat Kamus Indonesia");
  }else{
    inggrisToIndo.set(bhsIndonesia,bhsInggris);
    alert("siap");
  }
}


//handle button translate ke Indonesia
document.getElementById("btnInggris").addEventListener("click",translateIndonesia);
//handle button translate ke Inggris
document.getElementById("btnIndonesia").addEventListener("click",translateInggris);
//handle button tambah kamus indonesia
document.getElementById("btnTambahIndonesia").addEventListener("click",tambahKamusIndo);
