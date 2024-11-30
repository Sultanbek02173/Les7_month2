// var a = 34;
// let b = 20;
// const c = 40;

// {
//     // let m = 50;
//     var s = 40;
//     console.log(m + s);   
// }

// var s = 50;
// let m = 40
// console.log(s);

// Array function
console.log(arri());

function arri(){
    return 'Hello'
}

const arr1 = function(a = 0){
    return a
}
const arr = () => {
    return 'Hello'
}
console.log(arr());
console.log(arr1(10));

// operator Spread (...)

let mas = [1, 2, 3, 4, 5]
console.log([...mas, 9, 6, 10]);

let obj = {name: 'Islam', age: 18}
console.log({...obj, married: false});

// Деструктуризация массивов и объектов

const fun = () => {
    return [1, 2, 3, 4];
}

let [one, two, three, four, five] = fun();
console.log(two, five);

const fon = () => {
    return {
        x: 10,
        y: 30,
        z: 8,
    }
}

let {x: num1, y: num2, z: num3} = fon();
console.log(num1 + num2);

// Строковые шаблоны и разделители

let firstName = 'Akyl';
let SecondName = 'Otorbekov';
let age = 60;

console.log(`Name: ${firstName}, Surname ${SecondName}, age ${age}`);

const foo = (a, ...b) => {
    return `${a} : ${b}`
}

console.log(foo(10, 50, 40, 60, 90, 40));
