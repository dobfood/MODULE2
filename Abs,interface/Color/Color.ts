interface Colorable{
    howtoColor():string
}
class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    show(): string {
        return `I am a shape. My name is ${this.name}`;
    }
}
class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
}
 class Square extends Rectangle implements Colorable{
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

     howtoColor(): string {
         return "Color all four sides..";
     }
}
