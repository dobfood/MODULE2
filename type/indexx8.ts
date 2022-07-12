import {Book} from "./index8";

export class BookManager {
    books: Book[] = []

    constructor() {
    }

    add(book: Book): void {
        this.books.push(book);
    }

    getList(): Book[] {
        return this.books
    }
    findBook(ID:string){
        let books=-1
        this.books.forEach((book,index )=>{
            if(book.ID==ID) {
                books = index;
            }
        })
        return books
    }
    delete(ID: string): void {
        let indexBookDelete = this.findBook(ID);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        } else {
            throw new Error('delete error')
        }
    }
}
