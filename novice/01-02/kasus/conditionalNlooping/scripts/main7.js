var x;
for(let i=1;i<=100;i++){
  x=i;
  if (x%3==0 && x%5==0){
    console.log(x+" FIZZBUZZ");
  }
  else if(x%5==0){
    console.log(x+" BUZZ");
  }
  else if(x%3==0){
    console.log( x+" FIZZ");
  }
}