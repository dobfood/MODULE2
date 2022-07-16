export  class Stack{
    container:any[]
    limit:number;
    constructor() {
        this.container = [];
        this.limit =10
    }
    push(item:any):void{
        if(this.container.length==this.limit){
            throw new Error("Stack Full")
        }
        else {
            this.container.push(item)
        }
    }
    pop():any{
        if(this.container.length==0){
            throw new Error("Stack =0")
        }
        else {
            return  this.container.pop()
        }

    }
}