/*
Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.
*/

let numerosPrimos = [1, 2, 3, 5, 7, 11, 13];
let numeros = [...numerosPrimos, 17, 19, 23, 29, 31];
console.log(numeros);

/*
Crie uma função maiorNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min(). Uma observação importante é que a função Math.min() NÃO deve receber um array como parâmetro, sendo portanto, necessário expandir os valores.
*/

let numerosAleatorios = [137, 102, 275, 266, 217, 289, 95, 280, 77, 263, 281, 82, 93, 89, 219, 147, 213, 196, 97, 293, 198, 164, 256, 125, 261]

function maiorNumero(n) {
    return Math.min(...n);
}

console.log(maiorNumero(numerosAleatorios));
