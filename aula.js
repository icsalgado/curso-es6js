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

//Generators, são funções com pausas e continue, atravez de interfaces

function* hello() {
    console.log('hello');
    yield 1; //executa uma pausa
    console.log('from');
    yield 2;
    console.log('function');
    const value = yield 3;
    console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside'));
console.log(it.next());