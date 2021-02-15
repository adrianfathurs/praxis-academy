// class Person
  class Person{
    constructor(name){
      this.name=name;
      this.canTalk=true;
    }

    greet(){
      if(this.canTalk){
        console.log(`Hi i am ${this.name}`);
      }
     
    }
  }


// class Employee
  class Employee extends Person{
    constructor(name,title){
      
      super(name);
      this.title=title;
    }
    greetE(){
      if(this.canTalk){
        console.log(`Hi I am ${this.name}, the ${this.title}`)
      }
    }
  }



// class customer
class Customer extends Person{
  constructor(name){
    super(name);
  }
}


let joe=new Employee("Joe","Builder");
console.log(joe.greetE());