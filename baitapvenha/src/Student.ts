export class Student{

    private _fullname: string;
    private _email: string;
    private _group: string;
   _age:number
    constructor(fullname: string, email: string, group: string,age: number) {
        this._fullname = fullname;
        this._email = email;
        this._group = group;
        this._age = age;
    }
    get fullname(): string {
        return this._fullname;
    }

    set fullname(value: string) {
        this._fullname = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get group(): string {
        return this._group;
    }

    set group(value: string) {
        this._group = value;
    }
    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}