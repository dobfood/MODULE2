 class Product{
     name:string
     price:number;
    constructor(name:string, price:number) {
        this.name = name;
        this.price = price;
    }
     getName():string{
        return this.name
    }
    getPrice():number{
        return this.price
    }
     setName(name:string){
        this.name = name;
    }
     setPrice(price:number){
        this.price = price;
    }
}
class ProductManager extends Product{
    public product=[];
   constructor() {
        // @ts-ignore
       super();

   }
     getAll(){
        return this.product
    }
     add(product){
        this.product.push(product)
    }
}

 let laptop = new Product("Laptop", 20000);
 let iphone = new Product("Iphone", 10000);

 let productManager = new ProductManager();
 productManager.add(laptop) ;
 productManager.add(iphone);
 console.log(productManager.getAll());