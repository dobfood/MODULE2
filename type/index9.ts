function fibonacci (num) {
    if (num === 0 || num === 1 )
        return num;
    return fibonacci(num - 1) + fibonacci(num  - 2);
}
let sum = 0;
let num = 10;
for (let i = 0; i < num; i++)  {
    sum += fibonacci(i)
}
console.log(sum);