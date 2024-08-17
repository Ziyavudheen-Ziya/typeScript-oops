"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryController = void 0;
const librarian_1 = require("../models/librarian");
class LibraryController {
    constructor() {
        this.members = [];
        this.books = [];
        this.librarian = new librarian_1.Librarian('John Doe', 45, 'L001');
    }
    addMember(member) {
        this.members.push(member);
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        return this.books.map(book => book.getDetails()).join(", ");
    }
    showMembers() {
        return this.members.map(member => `${member.name} (ID: ${member.memberId})`).join(", ");
    }
    introduceLibrarian() {
        return this.librarian.introduce();
    }
}
exports.LibraryController = LibraryController;
