//symbols
//maneira de gerar um identificador unico
//não se invoca usando new, o valor passado dentro do symbol serve para debug
//well known symbols

const uniqueId = Symbol('hello');

const obj = {
    [uniqueId]: 'hello'
};

console.log(obj);