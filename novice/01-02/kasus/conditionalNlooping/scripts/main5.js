var i;
for (let i = 0; i < 15; i++) {
  x=i;
  if(x%2==0){
    document.write(x+'"even"<br>');
    console.log(x+' "even"');
  } 
  else{
    document.write(x+'"odd"<br>');
    console.log(x+' "odd"');
  } 
}