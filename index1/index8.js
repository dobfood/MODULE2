let [fname, lname] = ['code', 'gym'];
const Date = {
    date:{y: 1979, m: 1, d: 2}
}
const {date:{y:y1,m:m1,d:d1}}=Date
console.log(fname, lname);
console.log(y1,m1,d1)


let profile = {
    ename: 'Code',
    pname: 'Gym',
    // bday: new Date('1979-01-02')

}
let{ename,pname}=profile
console.log(ename, pname);