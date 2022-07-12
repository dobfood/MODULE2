abstract class Animals {
    abstract makesound();
}

class Tiger extends Animals {
    makesound(): string {
        return "Tiger:Grrereeeee!"
    }
}

class Chicken extends Animals implements Edible {
    makesound(): string {
        return "Chicken:cuc cu cuc cu!"
    }

    howtoEat(): string {
        return "could ne fried"
    }
}

let animals = [];
animals[0] = new Tiger()
animals[1] = new Chicken()
animals.forEach((item, index) => {
    console.log(item.makesound());
    if (item instanceof Chicken) {
        console.log(item.howtoEat())
    }
})

interface Edible {
    howtoEat(): string
}

abstract class Fruit implements Edible {
    abstract howtoEat(): string
}

class Apple extends Fruit {
    howtoEat(): string {
        return "Apple could be slided"
    }
}

class Orange extends Fruit {
    howtoEat(): string {
        return "Orange could be juiced";
    }
}

let fruit = [];
fruit[0] = new Apple()
fruit[1] = new Orange()
fruit.forEach(item => {
    console.log(item.howtoEat())
})
