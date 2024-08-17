export class Book{

      public title: string;
      public author : string


      constructor(title:string,author:string){

         this.title = title;
         this.author =author;
      }

      public getDetails():string{

          return `Title ${this.title}, Author${this.author}`
      }
}

