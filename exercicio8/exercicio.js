/*Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares. */

let numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let numerosImpares = numerosPares.map(
    function(n){
       return n+1;
    }
)
console.log(numerosImpares);


/*Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.*/

let nomes = ['Lucas', 'Maria', 'Leandra', 'Maria', 'Leshly'];

let indices = nomes.filter(
    function(nome){
         if(nome === 'Maria') return nome;
    }
);
console.log(indices);


/*Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.*/
/*Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”*/

let numeros = [2, 3, 4, 5, 6, 8, 10];

let organizador = numeros.reduce(
        (a, b) => {
        return a + " - " + b;
});
console.log(organizador);


/*Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.*/

let animais = ['gato', 'tartaruga', 'urso', 'pato', 'galinha', 'baleia'];

let frase = animais.forEach(
     animal =>  console.log(`O animal é ${animal}.`)
);
