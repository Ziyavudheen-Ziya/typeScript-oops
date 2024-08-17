"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Librarian = void 0;
const person_1 = require("./person");
class Librarian extends person_1.Person {
    constructor(name, age, employeeId) {
        super(name, age);
        this.employeeId = employeeId;
    }
    introduce() {
        return `${super.introduce()} I'am the librarian with employee Id:${this.employeeId}`;
    }
}
exports.Librarian = Librarian;
