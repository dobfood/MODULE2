"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillsManager = void 0;
var BillsManager = /** @class */ (function () {
    function BillsManager() {
    }
    BillsManager.prototype.getAllBills = function () {
        return BillsManager.bills;
    };
    BillsManager.prototype.addNewBill = function (bill) {
        BillsManager.bills.push(bill);
    };
    BillsManager.prototype.updateBill = function (value, bill) {
        BillsManager.bills[value] = bill;
    };
    BillsManager.prototype.deleteBill = function (value) {
        BillsManager.bills.splice(value, 1);
    };
    BillsManager.prototype.findtBillByNumberhome = function (numberhome) {
        var value = -1;
        for (var i = 0; i < BillsManager.bills.length; i++) {
            if (BillsManager.bills[i].Client._numberhome == numberhome) {
                value = 1;
                break;
            }
        }
        return value;
    };
    BillsManager.prototype.moneyBill = function (numberHome) {
        var value = this.findtBillByNumberhome(numberHome);
        // let value= BillsManager.bills.findIndex((item)=>{
        //     return (item._client._numberhome=numberHome)
        // })
        if (value === -1) {
            return -1;
        }
        else {
            var moneys = 1;
            // console.log(BillsManager.bills[value]._indexnews);
            // console.log(BillsManager.bills[value]);
            console.log(value);
            moneys = ((BillsManager.bills[value - 1].Indexnews) - (BillsManager.bills[value - 1].Index)) * 750;
            return moneys;
        }
    };
    BillsManager.bills = [];
    return BillsManager;
}());
exports.BillsManager = BillsManager;
