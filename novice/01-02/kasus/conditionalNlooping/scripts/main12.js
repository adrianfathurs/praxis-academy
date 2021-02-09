var x,sum=0;
for (let i=0;i<1000;i++){
  x=i;
  if(x%3==0 || x%5==0){
    sum+=x;
  }
}
console.log(sum);