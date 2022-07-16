import {Bill} from "./bills";

import {Client} from "./client";

export class BillsManager {
    private static bills: Bill[] = [];
    constructor() {
    }

    getAllBills(): Bill[] {
        return BillsManager.bills
    }

    addNewBill(bill: Bill): void {
        BillsManager.bills.push(bill)
    }

    updateBill(value: number, bill: Bill): void {
        BillsManager.bills[value] = bill;
    }

    deleteBill(value: number): void {
        BillsManager.bills.splice(value, 1)
    }

    findtBillByNumberhome(numberhome: number): number {
        let value: number = -1;
        for (let i = 0; i < BillsManager.bills.length; i++) {
            if (BillsManager.bills[i].Client._numberhome == numberhome) {
                value = 1
                break;
            }
        }
        return value
    }

    moneyBill(numberHome: number): number {
        let value = this.findtBillByNumberhome(numberHome)
        if (value === -1) {
            return -1
        } else {
            let moneys = 1;
            moneys = ((BillsManager.bills[value].Index) - (BillsManager.bills[value].Indexnews)) * 750
            return moneys
        }
    }
}