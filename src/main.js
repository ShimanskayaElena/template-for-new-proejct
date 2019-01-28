// console.log('main.js');
const user = {
    name: 'Ivan',
    age: 25
};
const {name, age} = user;
// console.log(name, age);
const {name: n, age: a} = user;
// console.log(n, a);

const arr = ['first', 'second'];
const [f, s] = arr;
// console.log(f, s);
// --------------------------------------------------------------
// rest оператор,  деструктуризация,  собирает оставшиеся элементы в массив

// const obj = {foo: 'foo', bar: 'bar', baz: 'baz'};
// const {foo, ...rest} = obj;
// console.log(foo, rest);
const array = ['first', 'second', 1, 2];
const [first, ...rest] = array;
// console.log(first, rest);
const obj = {
    foo: {
        a: 1,
        b: 2,
        c: 3,
    },
    bar: 4,
    baz: 5,
};
// const {foo: {a, ...rest1}, ...rest2} = obj;

// --------------------------------------------------------------
// spread оператор (распространение),  извлекает элементы из массива, образуя список

/* function func({param1, param2, ...rest}) { // rest operator
    console.log('All parameters: ',
        {param1, param2, ...rest}); // spread operator
    return param1 + param2;
}*/

// console.log({...obj, qux: 4});