var num1,num2,num3;
num1=window.prompt("Input Angka Pertama");
num2=window.prompt("Input Angka Kedua");
num3=window.prompt("Input Angka Ketiga");

var arr=[];

if(num1>num2 && num1>num3)
{
  arr[0]=num1;
  if(num2>num3){
    arr[1]=num2;
    arr[2]=num3;
  }
  else{
    arr[1]=num3;
    arr[2]=num2;
  }
    for(let i=0;i<3;i++){
      console.log(arr[i]);}
    }
else if(num2>num1 && num2>num3){
   arr[0]=num2;
      if(num1>num3){
        arr[1]=num1;
      arr[2]=num3;
      }
      else{
      arr[1]=num3;
      arr[2]=num1;
    }

    for(let i=0;i<3;i++){
      console.log(arr[i]);
    }
}
else if(num3>num1 && num3>num2){
   arr[0]=num3;
   if(num2>num1){
      arr[1]=num2;
      arr[2]=num1;
      }
      else{
      arr[1]=num1;
      arr[2]=num2;
    }
    for(let i=0;i<3;i++){
      console.log(arr[i]);
    }
}
else{
  alert("else");
}

