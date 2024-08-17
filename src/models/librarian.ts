import {Person} from './person';

export class Librarian extends Person{

    public employeeId : string

    constructor (name:string,age:number,employeeId:string){

         super(name,age)
         this.employeeId = employeeId;
    }


    public introduce():string{

         return `${super.introduce()} I'am the librarian with employee Id:${this.employeeId}`
    }
}