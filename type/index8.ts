export class Book{
    ID:string;
    name:string;
    constructor(ID:string, name:string) {
        this.name = name;
        this.ID = ID;
    }
    getName():string {
        return this.name;}
    setName(name:string) :void{
        this.name = name;
    }
    getID():string{
        return this.ID;
    }

}