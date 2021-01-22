//symbols
//maneira de gerar um identificador unico
//não se invoca usando new, o valor passado dentro do symbol serve para debug
//well known symbols

const uniqueId = Symbol('hello');

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());