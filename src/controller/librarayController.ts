
import { Member } from "../models/member";
import { Librarian } from "../models/librarian";
import { Book } from "../models/book";

export class LibraryController{

     
     private members : Member[] = []
     private librarian :  Librarian;
     private books : Book[] =[]

     constructor(){

         this.librarian = new Librarian('John Doe',45,'L001');

     }

     addMember(member:Member):void{

        this.members.push(member)


      }

     addBook(book:Book):void{

         this.books.push(book)
     }
 
     showBooks():string{

         return this.books.map(book=> book.getDetails()).join(", ");

     }

     showMembers(): string{

         return this.members.map(member => `${member.name} (ID: ${member.memberId})`).join(", ");

     }

     introduceLibrarian():string{

         return this.librarian.introduce();
     }
}