"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getDetails() {
        return `Title ${this.title}, Author${this.author}`;
    }
}
exports.Book = Book;
