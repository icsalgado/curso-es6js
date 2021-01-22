//symbols
//maneira de gerar um identificador unico
//não se invoca usando new, o valor passado dentro do symbol serve para debug
//well known symbols - adiciona capacidades, inclusive em objetos
//interface para fazer operações


const uniqueId = Symbol('hello');

Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'DIO';

arr[Symbol.iterator]().next();

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length 
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());