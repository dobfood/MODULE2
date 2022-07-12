class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    show(): string {
        return `I am a shape. My name is ${this.name}`;
    }
}
interface Resizable{
    Resize(percent: number);
}
class Circle extends Shape implements Resizable{
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    Resize() {
        return this.radius+this.radius*((Math.random()*100)+1)/100
    }
}

class Rectangle extends Shape implements Resizable{
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }
    shows():number{
       return  this.width+
        this.height
    }
    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }

    Resize() {
        return (this.width * this.height)+((this.width*this.height)*((Math.random()*100)+1)/100)

    }
}
let rectangle = new Rectangle(20,10,"ec o ec")
let circle= new Circle("tree",20)
console.log(circle.radius)
console.log(circle.Resize())
console.log(rectangle.shows())
console.log(rectangle.Resize())



