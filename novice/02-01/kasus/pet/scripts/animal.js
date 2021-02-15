class Animal{
  constructor(tiredness,hunger){
    this.tiredness=tiredness;
    this.hunger=hunger;
  }

  sleep(){
    if(this.tiredness>70){
      return true;
    }
    else{
      return false;
    }
  }

  sluggish(){
    if(this.hunger>80){
      return true;
    }
    else{
      return false;
    }
  }

}

class Cat extends Animal{
  constructor(name,tiredness,hunger){
    super(tiredness,hunger);
    this.name=name;
  }

  result(){
    let retTiredness=this.sleep();
    let retSluggish=this.sluggish();

    if(retTiredness && retSluggish){
      console.log(`PELIHARAAN ${this.name} ANDA BENAR BENAR CAPEK DAN TIDAK MAU DIRAWAT`);
    }
    else{
      console.log(`PELIHARAAN ${this.name} ANDA SEHAT DAN TIDAK LAPAR`);
    }
  }
}

let peliharaan1 =new Cat("SUMI",100,200);
console.log(peliharaan1.result());

let peliharaan2=new Cat("Poopy",10,20);
console.log(peliharaan2.result());

