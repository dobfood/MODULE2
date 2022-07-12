let arr = [1, 2, 3, 4, 56, 5];
let square = (item) => item * item;

function arrss(func,arr) {
    let newArr = [];
    arr.forEach((element) => {
            newArr.push(func(element));

        }
    );
    return newArr
}

console.log(arrss(square, arr));