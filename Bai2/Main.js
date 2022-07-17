"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as Readline from "readline-sync"
var readline = require("readline-sync");
var client_1 = require("./client");
var bills_1 = require("./bills");
var billsManager_1 = require("./billsManager");
var billsManager = new billsManager_1.BillsManager();
function ShowlistBill() {
    var bill = billsManager.getAllBills();
    for (var _i = 0, bill_1 = bill; _i < bill_1.length; _i++) {
        var bill1 = bill_1[_i];
        console.table("Ch\u1EC9 s\u1ED1 \u0110i\u1EC7n c\u0169 : ".concat(bill1.Index, " \n\n                                 Ch\u1EC9 s\u1ED1 \u0110i\u1EC7n m\u1EDBi: ").concat(bill1.Indexnews, " \n\n                                 S\u1ED1 ti\u1EC1n ph\u1EA3i tr\u1EA3 : ").concat(bill1.Money, " \n\n                                 T\u00EAn H\u1ED9 gia \u0111\u00ECnh :").concat(bill1.Client._fullnamme, " \n\n                                 S\u1ED1 nh\u00E0 :").concat(bill1.Client._numberhome, " \n\n                                 M\u00E3 s\u1ED1 c\u00F4ng t\u01A1 \u0111i\u1EC7n:").concat(bill1.Client._numberelectric));
    }
}
function inputClient() {
    var fullName = readline.question('Name host:');
    var numberHome = +readline.question('Number home :');
    var numberElectrics = +readline.question('Number of client meters:');
    return new client_1.Client(fullName, numberHome, numberElectrics);
}
function inputBill() {
    var inDex = +readline.question('INDEX old:');
    var indexNews = +readline.question('INDEX new:');
    var client = inputClient();
    var moneyElectric = +readline.question('INDEX money:');
    return new bills_1.Bill(inDex, indexNews, moneyElectric, client);
}
function addnewBill() {
    console.log('Thêm Căn Hộ mới');
    var bill = inputBill();
    billsManager.addNewBill(bill);
}
function updateBill() {
    console.log('Cập nhập thông tin chủ nhà');
    var value = +readline.question('Nhập vị trí căn Hộ muốn chỉnh sửa:');
    var bill = inputBill();
    billsManager.updateBill(value, bill);
}
function deleteBill() {
    console.log('Xóa thông tin căn hộ');
    var value = +readline.question('Enter location delete:');
    billsManager.deleteBill(value);
}
function menu() {
    console.log('<--------------------------->');
    console.log('1 :ADD Client ');
    console.log('2 : Show Client ');
    console.log('3 : Change Client ');
    console.log('4 : Delete Client ');
    console.log('5 : Electric Bill ');
    console.log('0 : Exit');
    console.log('<-------------------------->');
}
function moneyElectric() {
    var numberHome = +readline.question('Number home');
    var bill = billsManager.moneyBill(numberHome);
    console.log("S\u1ED1 ti\u1EC1n ph\u1EA3i tr\u1EA3 c\u1EE7a c\u0103n h\u1ED9 c\u00F3 s\u1ED1 nh\u00E0 l\u00E0 : ".concat(numberHome, ":").concat(bill));
}
var check;
do {
    menu();
    check = +readline.question('Please enter number :');
    switch (check) {
        case 1:
            addnewBill();
            break;
        case 2:
            ShowlistBill();
            break;
        case 3:
            updateBill();
            break;
        case 4:
            deleteBill();
            break;
        case 5:
            moneyElectric();
            break;
        case 0:
            break;
        default: {
            console.log('Nhập lại :');
            break;
        }
    }
} while (check != 0);
