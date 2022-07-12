function sum(a,b,c){
    return a+b+c;
}
const number=[1,2,3]
console.log(sum.apply(null,number))
let a=[1,2,3]
a.push([3,4,5])
console.log(a)
let b=[5,6,8];
a.push.apply(b,[1,3,2])
console.log(b)
let c=[3,4,6];
let d=[3,1,4]
c.push(...d);
console.log(c)
let e=[3,4];
let f=[3,4,5];
e=[...f];
console.log(e)
let u = [1,2];
let y = [3,4,5];
let r = [...u,...y];
console.log(r);
