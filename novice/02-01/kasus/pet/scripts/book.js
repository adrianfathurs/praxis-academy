class BookList{
  markRead=4;
  readYet=6;
  nextBookRead=[
    {title:"AVATAR",genre:"Animation",author:"jhon"},
    
  ];
  currentReadBook=[
    {title:"THE LEGEND",genre:"Action",author:"jhon"},
    {title:"THE ANG",genre:"Action",author:"jhon"},
    {title:"THE MULAN",genre:"Action",author:"jhon"},
    {title:"THE Scobby",genre:"Action",author:"jhon"},
  ];
  lastReadBook=[
    {title:"PAst N PURIOS",genre:"Adventure",author:"jhon"},
  ];
}
class Book extends BookList{
  constructor(title,genre,author,read){
    super();
    this.title=title;
    this.genre=genre;
    this.author=author;
    this.read=false;
  }
  addList(){
    var a=0;
    for (let i = 0; i < this.markRead.length; i++) {
      if(this.currentReadBook[i]==this.title){
        a++; 
      }
    }
    if(a>0){
      this.markRead+=1;
      return false;
    }else{
      this.readYet+=1;
      return true;
    }
  }
  finishCurrentBook(){
    this.read=false
  }

  result(){
    let addBook=this.addList();
    if(addBook){
      var x=this.nextBookRead;
      x.push({title:this.title,genre:this.genre,author:this.author});
    }
    else{
      //kurang buku
    }

  }
}
let objk=[ {title:"THE LOL",genre:"Action",author:"jhon"},{title:"LES ",genre:"Action",author:"jhon"}];
let ini;
for (let k = 0; k < objk.length; k++) {
  ti=objk[k].title;
  gen=objk[k].genre;
  auth=objk[k].author;
  ini=new Book(ti,gen,auth);
  ini.result();
}

console.log(ini.nextBookRead);
