import {Book} from "./index8";
import {BookManager} from "./indexx8";


let book1 = new Book('B001','Lập trình Java');
let book2 = new Book('B002','Lập trình PHP');
let book3 = new Book('B003','Lập trình TypeScript');

let bookManager = new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
console.log(bookManager)
console.log(bookManager.delete("B003"))
