var cnt= 5;
var num=10;
var f5='';
while(cnt-- >0)
{
  while(!happyNumber(num)){
    num++
  }

  f5=f5+(num+", ");
  num++
}
console.log('first 5 happy numbers are : '+f5)

function happyNumber(num){
  var m,n;
  var c=[];
  while(num !=1 && c[num]!==true){
    c[num]=true;
    m=0;
      while(num>0){
        n=num%10;
        m+=n*n;
        num=(num-n)/10;
      }
      num=m;
  }
  return (num==1);
}