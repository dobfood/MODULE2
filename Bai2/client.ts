export class Client{
    _fullnamme:string;
    _numberhome:number;
    _numberelectric:number

    constructor(fullnamme: string, numberhome: number, numberelectric: number) {
        this._fullnamme= fullnamme
        this._numberhome= numberhome
        this._numberelectric= numberelectric;
    }
    get Numberhome():number {
        return this._numberhome
    }
    get Fullname():string{
        return this._fullnamme
    }
    get Numberelectric():number{
        return this._numberelectric
    }
    set Numberhome(value:number){
        this._numberhome= value
    }
    set Fullname(value:string){
        this._fullnamme=value
    }
    set Numberelectric(value:number){
        this._numberelectric=value
    }
}