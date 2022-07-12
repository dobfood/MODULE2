class Cirle {
    color: string = "green";
    radius: number = 20;

    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }
}

let cirlelist: Cirle[] = [];
cirlelist.push(new Cirle("red", 20))
cirlelist.push(new Cirle("blue", 30))

function showcirle(cirle: Cirle) {
    console.log("hinh tron nay co duong kinh" + cirle.radius + "hinh tron nay co mau " + cirle.color)
}

console.log(cirlelist.forEach(showcirle))
