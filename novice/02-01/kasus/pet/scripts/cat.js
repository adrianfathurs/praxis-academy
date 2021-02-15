class Cat{
  
  constructor(tiredness,hunger/* ,loneliness,happiness */){
    this.tiredness=tiredness;
    this.hunger=hunger;
    /* this.lonliness=loneliness;
    this.happines=happiness; */
  }
    feed(){
      if(this.hunger>=80){
        return console.log("The cat is not hungry");
      }
      else if(this.hunger<79 && this.hunger>60){
        return console.log("The Cat is Hungry");
      }
      else{
        return console.log("The cat is so hungry and its look like poor");
      }
    };
    sleep(){
      if(this.tiredness>=90){
        return console.log("The cat is not tired");
      }
      else if(this.tiredness<79 && this.tiredness>60){
        return console.log("The cat is Tired");
      }
      else{
        return console.log("The cat is so Tired");
      }
    };

    pet(){
      let hasilFeed=this.feed();
      let hasilTired=this.sleep();
      console.log(`${hasilFeed} and ${hasilTired}`);
    }

}

let peliharaan=new Cat("70","80");
console.log(peliharaan.pet());