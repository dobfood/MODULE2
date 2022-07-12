import {Book} from "./index7.";

let book1=new Book("nhung chu cuu Thao","anh kiet",false);
let book2=new Book("nhung ke ngheo kho","anh kiet",true);
let book3=new Book("nguoi yeu toi de thuong","anh kiet",true)
let listbook:Book[]=[];
listbook.push(book1,book2,book3);
for(let i=0;i<listbook.length;i++){
    let book=listbook[i];
    let bookinfo=book.title+"By"+book.author;
    if (book.already){
        console.log('cuon sach'+bookinfo+"van con ")
    }
    else {
        console.log('cuon sach'+bookinfo+'da het')
    }
}