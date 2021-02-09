var num1,num2,num3;

num1=window.prompt("Input Angka Pertama :");
num2=window.prompt("Input Angka Kedua :");
num3=window.prompt("Input Angka Ketiga :");

//pengecekan angka positif
if(num1>0 && num2>0 && num3>0){
  alert("The Sign is +");
}
//pengecekan angka negatif
else if(num1<0 && num2<0 && num3<0){
   alert("The Sign is +");
}
//pengecekan angka 
else if(num1>0 && num2<0 && num3<0){
  alert("The Sign is +");
}
else if(num1<0 && num2>0 && num3<0){
  alert("The Sign is +");
}
else if(num1<0 && num2<0 && num3>0){
  alert("The Sign is +");
}
else{
  alert("The Sign is -");
}
