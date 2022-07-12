class Animals{
    sayAnything():void{
        console.table("ec o ec")
    }
}
class Mouse extends Animals{
    sayAnything():void{
        console.log(["ec ec","ec o ec"])
    }
}
function test(){
    let animals=new Mouse()
    animals.sayAnything()
}
let animal=new Animals()
animal.sayAnything()
test()