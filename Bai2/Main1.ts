import {Stack} from "./Stack";
let stack=new Stack()
let stack2=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
function ctrlZ(){
    let item=stack.pop()
    stack2.push(item)
}
ctrlZ();
ctrlZ()

console.log(stack.container)
function ctrlI( ) {
    let item =stack2.pop()
    stack.push(item)

}
ctrlI()
console.log(stack.container)