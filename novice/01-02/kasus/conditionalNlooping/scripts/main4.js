var num1,num2,num3;
let x;
num1=window.prompt("Input Angka Pertama :");
num2=window.prompt("Input Angka Kedua :");
num3=window.prompt("Input Angka Ketiga :");

if(num1>num2 && num1>num3){
  x=num1;
  alert(x);
}
else if(num2>num1 && num2>num3){
  x=num2;
  alert(x);
}
else{
  x=num3;
  alert(x)
}