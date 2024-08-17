export class Person{

     public name:string;
     public age: number;

     constructor(name:string,age:number){

          this.name = name;
          this.age = age
     }

     public introduce():string{

         return `Hello my name is ${this.name} and I'am ${this.age}, Years old`
     }
}