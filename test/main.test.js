"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("../main"));
(async () => {
    main_1.default.tabelo.porĈiu([1, 2, 3], n => console.log(n));
    console.log(await main_1.default.kunkura.tabelo.kelke([1, 2, 3], async (i) => i % 2 === 0));
})();
