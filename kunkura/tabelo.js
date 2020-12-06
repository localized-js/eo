"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kelke = exports.mapi = exports.porCxiu = exports.porĈiu = exports.plataMapi = exports.troviIndekso = exports.trovi = exports.filtri = exports.cxiu = exports.ĉiu = void 0;
const core_1 = __importDefault(require("@localized/core"));
const { array } = core_1.default.concurrent;
exports.ĉiu = array.every();
exports.cxiu = exports.ĉiu;
exports.filtri = array.filter();
exports.trovi = array.find();
exports.troviIndekso = array.findIndex();
exports.plataMapi = array.flatMap();
exports.porĈiu = array.forEach();
exports.porCxiu = exports.porĈiu;
exports.mapi = array.map();
exports.kelke = array.some();