var b=0;
class Hitung{
  constructor(a){
    this.a=a;
  }

  tambah(){
    b++;
    return this.a+=this.a;
  }
}

let hit =new Hitung(3);
console.log(hit.tambah());

console.log(b)