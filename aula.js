//arrow functions
var  sum = (a, b) => {
    return a + b;
}

console.log(sum(5, 15));

//default functions arguments
function multiply(a, b = 1){//aqui eu posso atribuir um valor a uma variavel não informada nos parametros
    return a * b;
}

console.log(multiply(5))

//
var obj = {
    sum2(a, b) {
        return a + b;
    }
}

console.log(obj);