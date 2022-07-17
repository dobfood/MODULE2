// import * as Readline from "readline-sync"
import * as readline from 'readline-sync'
import {Client} from "./client";
import {Bill} from "./bills";
import {BillsManager} from "./billsManager";


let billsManager = new BillsManager()

function ShowlistBill() {
    let bill = billsManager.getAllBills()

    for (const bill1 of bill) {
        console.table(`Chỉ số Điện cũ : ${bill1.Index} \n
                                 Chỉ số Điện mới: ${bill1.Indexnews} \n
                                 Số tiền phải trả : ${bill1.Money} \n
                                 Tên Hộ gia đình :${bill1.Client._fullnamme} \n
                                 Số nhà :${bill1.Client._numberhome} \n
                                 Mã số công tơ điện:${bill1.Client._numberelectric}`)
    }
}

function inputClient(): Client {
    let fullName = readline.question('Name host:')
    let numberHome = +readline.question('Number home :')
    let numberElectrics = +readline.question('Number of client meters:')
    return new Client(fullName, numberHome, numberElectrics)
}

function inputBill(): Bill {
    let inDex = +readline.question('INDEX old:')
    let indexNews = +readline.question('INDEX new:')
    let client = inputClient()
    let moneyElectric = +readline.question('INDEX money:')
    return new Bill(inDex, indexNews, moneyElectric, client)
}

function addnewBill() {
    console.log('Thêm Căn Hộ mới')
    let bill = inputBill()
    billsManager.addNewBill(bill)
}

function updateBill() {
    console.log('Cập nhập thông tin chủ nhà')
    let value = +readline.question('Nhập vị trí căn Hộ muốn chỉnh sửa:')
    let bill = inputBill()
    billsManager.updateBill(value, bill)
}

function deleteBill() {
    console.log('Xóa thông tin căn hộ')
    let value = +readline.question('Enter location delete:')
    billsManager.deleteBill(value)
}

function menu() {
    console.log('<--------------------------->')
    console.log('1 :ADD Client ')
    console.log('2 : Show Client ')
    console.log('3 : Change Client ')
    console.log('4 : Delete Client ')
    console.log('5 : Electric Bill ')
    console.log('0 : Exit')
    console.log('<-------------------------->')

}

function moneyElectric() {
    let numberHome = +readline.question('Number home')
    let bill = billsManager.moneyBill(numberHome)
    console.log(`Số tiền phải trả của căn hộ có số nhà là : ${numberHome}:${bill}`)
}

let check
do {
    menu();
    check = +readline.question('Please enter number :')
    switch (check) {
        case 1:
            addnewBill()
            break;
        case 2:
            ShowlistBill()
            break;
        case 3:
            updateBill()
            break;
        case 4:
            deleteBill()
            break;
        case 5:
            moneyElectric()
            break;
        case 0 :
            break
        default: {
            console.log('Nhập lại :');
            break;
        }

    }

}
while (check != 0);
