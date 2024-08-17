
export class Member{

     public name: string;
     public age: number;
     public memberId: string

     constructor (name:string,age:number,memberId:string){

       this.name = name;
       this.age = age;
       this.memberId = memberId;
     }

     public getDetails():string{

         return `Member Name:${this.name},Age:${this.age},ID:${this.memberId}`
     }
}