"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
class Member {
    constructor(name, age, memberId) {
        this.name = name;
        this.age = age;
        this.memberId = memberId;
    }
    getDetails() {
        return `Member Name:${this.name},Age:${this.age},ID:${this.memberId}`;
    }
}
exports.Member = Member;
