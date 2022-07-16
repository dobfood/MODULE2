import {Client} from "./client"
export class Bill{
   private _index: number;
   private _indexnews: number;
   private _money: number;
   private _client:Client
    constructor(index: number, indexnews: number, money: number,Client:Client) {
        this._money=money;
        this._index=index
        this._indexnews=indexnews
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