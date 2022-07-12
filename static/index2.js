var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Product;
}());
var ProductManager = /** @class */ (function (_super) {
    __extends(ProductManager, _super);
    function ProductManager() {
        var _this = 
        // @ts-ignore
        _super.call(this) || this;
        _this.product = [];
        return _this;
    }
    ProductManager.prototype.getAll = function () {
        return this.product;
    };
    ProductManager.prototype.add = function (product) {
        this.product.push(product);
    };
    return ProductManager;
}(Product));
var laptop = new Product("Laptop", 20000);
var iphone = new Product("Iphone", 10000);
var productManager = new ProductManager();
productManager.add(laptop);
productManager.add(iphone);
console.log(productManager.getAll());
