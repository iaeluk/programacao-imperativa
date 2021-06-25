const [somar, subtrair, dividir, multiplicar] = require('./calcular/calcular');


let soma = somar(100, 2) //5
console.log(soma);

let subtracao = subtrair(77, 3); //5
console.log(subtracao);

let divisao = dividir(50, 4); //25
console.log(divisao);

let multiplicacao = multiplicar(8, 25); //75
console.log(multiplicacao);


