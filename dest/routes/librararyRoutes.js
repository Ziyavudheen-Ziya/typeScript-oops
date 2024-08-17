"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const librarayController_1 = require("../controller/librarayController");
const member_1 = require("../models/member");
const book_1 = require("../models/book");
const router = express_1.default.Router();
const library = new librarayController_1.LibraryController();
library.addBook(new book_1.Book('The Great Gatsby', 'F. Scott Fitzgerland'));
library.addBook(new book_1.Book('1984', 'George Orwell'));
router.get('/', (req, res) => {
    res.render('index', {
        librarian: library.introduceLibrarian(),
        books: library.showBooks(),
        members: library.showMembers()
    });
});
router.post('/add-book', (req, res) => {
    const { title, author } = req.body;
    const newBook = new book_1.Book(title, author);
    library.addBook(newBook);
    res.redirect('/');
});
router.post('/add-member', (req, res) => {
    const { name, age } = req.body;
    const newMember = new member_1.Member(name, parseInt(age), `M${Date.now()}`);
    library.addMember(newMember);
    res.redirect('/');
});
exports.default = router;
