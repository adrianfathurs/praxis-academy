//Menampilkan kalimat hello word pada selsector h1
const myHeading = document.querySelector("h1");
myHeading.textContent='Hello World';


                                                    /* Variables */

//menggunakan let untuk mendeklarasikan variables
  // peraturan menggunakan let bisa diubah value nya tetapi tidak dapat dideklare rasikan dengan variable yang sama dibawahnya
  let myVariable="Bob";
  console.log(myVariable);
// menggunakan var untuk mendeklarasikan variables
  // peraturan menggunakan var bisa diubah value nya dan dapaet dideklare menggunakan nama variable yang sama dibawahnya
  var myFav="Hello";
  console.log(myFav);
//menggunakan const untuk mendeklarasikan variables
  //const tidak dapat diubah value dan tidak dapat dideklarasikan dengan nama variable yang sama dibawahnya
  const myHey="Hey";
  console.log(myHey);

                                                      /* Operators n Conditional n Alert */
//Aritmatika
  var numA=7;
  var numB=9;
  var numC= numA+numB;
  var numD= numA*numB;
  var numE= numA%numB;
  var numF= numA-numB;
  var numG= numA/numB;
  console.log(numA,numB,numC,numD,numE,numF,numG);
//Perbandingan n Conditional
  // >=,<=,<,>,==,===
  if(numA>numB){
    console.log("Jawabannya True: "+numC);
  }
  else{
    console.log("Jawabannya false :"+numG);
  }
  //---------------------------------------//
  if(numA<numB){
    alert("numA < numB");
  }
  else{
    alert("numA > numB");
  }

                                                                  /* Function */
//membuat fungsi dan dipanggil
function perkalian(a,b){
  var hasil=a*b;
  console.log(hasil)
}

  //memanggil fungsi
    perkalian(10,29);

                                                                  /* Event and change Image */
//membuat event
  document.getElementById("btnKali").addEventListener("click",kali);
  document.getElementById("btnTambah").addEventListener("click",tambah);
  //fungsi Kali
  function kali(){
    var dikali=8*7;
    alert("Perkalian 8X7 :"+ dikali);
  }
  //fungsi Tambah
  function tambah(){
    var ditambah=8+7;
    alert("Perkalian 8+7 :"+ ditambah);
    
  }

// merubah image
  document.getElementById("btnUbah").addEventListener("click",ubah);
  function ubah(){
    let myImage = document.querySelector('img');
    let mySrc = myImage.getAttribute('src');
        if(mySrc==='images/gunung1.jpg'){
          myImage.setAttribute('src','./images/gunung2.jpg');
        }
        else{
          myImage.setAttribute('src','./images/gunung1.jpg');
        }
      
    }

//latihan terakhir
/* let myButton = document.getElementById('btnChange');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
} */