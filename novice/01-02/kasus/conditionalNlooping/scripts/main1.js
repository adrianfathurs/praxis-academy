var num1,num2;
num1= window.prompt("Masukan Angka Pertama");//3
num2= window.prompt("Masukan Angka Kedua");//4

if(parseInt(num1)>parseInt(num2)){
  alert("Angka Pertama Lebih Besar dibanding Angka kedua"+num1+">"+num2);
}
else if(parseInt(num1)==parseInt(num2)){
  alert("Angka Pertama Sama Dengan Angka kedua");
}
else{
  alert("Angka Kedua Lebih Besar Dibanding Angka Pertama : "+num2+">"+num1);
}