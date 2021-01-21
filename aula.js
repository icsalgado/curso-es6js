//Rest operator ... dentro dos argumentos - pega todos os parametros e transforma num array

function sum(...args) {
    return args.reduce((acumulado, value) => acumulado + value, 0);//evita o uso de linhas que implementa a soma de todo o array
}

console.log(sum(5, 5, 5, 2, 3));

//spread operator - pega array e transforma em argumentos para a função

const str = 'DIO';
const arr = [1, 2, 3, 4]
const arr2 = [5, 6, 7]

function logArgs(...args){
    console.log(args);
}

logArgs(...str);//aplica o spread
logArgs(...arr);
const arrConcatenado = [...arr, ...arr2]; //substitui o concat
console.log(arrConcatenado);

const obj = {//so se pode criar spread em objetos gerando novos objetos
    test: 123
};
const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);

//Destructuring Assignment

var [maca2, banan2, laranja2, [tomate2]] = ['maca', 'banana', 'laranja', ['tomate']];
//evita a criação de uma variavel para destruir o array para cada posição
