"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
function addStudent() {
}
function menu() {
    console.log('<---------------------->');
    console.log('1. Them hoc sinh');
    console.log('2. Xoa hoc sinh');
    console.log('3. Tim hoc sinh');
    console.log('4. Chinh sua hoc sinh');
    console.log('0. Thoat');
    console.log('<----------------------->');
}
let check;
do {
    menu();
    check = +readline.question('Nhap lua chon');
    switch (check) {
        case 1:
            console.log('them hoc sinh');
            break;
        case 2:
            console.log('xoa hoc sinh');
            break;
        case 3:
            console.log('tim hoc sinh');
            break;
        case 4:
            console.log('chinh sua hoc sinh');
            break;
        case 0:
            break;
    }
} while (check != 0);
