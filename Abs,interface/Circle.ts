class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius
    }

    setRadius(radius: number) {
        this.radius = radius;
    }

    toString(): string {
        return "hinh tron co ban kinh = " + this.getRadius()
    }
}

interface Comparable {
    compareTo(O: object): number;
}

class ComparableCircle extends Circle implements Comparable {
    constructor(radius: number) {
        super(radius);
    }

    compareTo(o: ComparableCircle): number {
        if (this.getRadius() > o.getRadius()) return 1;
        else if (this.getRadius() < o.getRadius()) return -1;


        else
            return 1;
    }
}
let radius = []
 radius[0] = new ComparableCircle(20)
 radius[1]= new ComparableCircle(30)
 radius[2]= new ComparableCircle(40)

let result =  radius[1].compareTo(radius[2])
if(result===120){
    console.log("ec o ec")
}
else {
    console.log("ec ec")
}
