import {Client} from "./client"
export class Bill{
    _index: number;
    _indexnews: number;
    _money: number;
    _client:Client
    constructor(index: number, indexnews: number, money: number,Client:Client) {
        this._index=index
        this._indexnews=indexnews
       this._money=money;
        this._client=Client
    }
    get Index():number{
       return this._index
    }
    set Index(value:number){
       this._index=value
    }
    get Indexnews():number{
       return this._indexnews
    }
    set Indexnews(value:number){
       this._indexnews=value
    }
    get Money():number{
       return this._money
    }
    set Money(value:number){
       this._money=value
    }
    get Client():Client{
       return this._client
    }
    set Client(value:Client){
       this._client=value
    }
}