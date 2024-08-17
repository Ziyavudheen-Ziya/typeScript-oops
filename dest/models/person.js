"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hello my name is ${this.name} and I'am ${this.age}, Years old`;
    }
}
exports.Person = Person;
