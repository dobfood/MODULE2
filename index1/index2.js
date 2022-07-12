let mart={x:23,y:33,z:-23};
const{x,y,z}=mart
console.log(x);
console.log(y);
console.log(z);
console.log(mart)
const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
const{section2:{alpha:alpha2,beta:betta1}}=marks
console.log(alpha1, beta1);
console.log(alpha2,betta1)