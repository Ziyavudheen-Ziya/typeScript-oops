"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const librararyRoutes_1 = __importDefault(require("./routes/librararyRoutes"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(librararyRoutes_1.default);
exports.default = app;
