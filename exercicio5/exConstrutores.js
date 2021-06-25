/*
Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).

Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.
*/

function Restaurante(nome, cardapio){
         this.nome = nome;
         this.cardapio = cardapio;
         this.entrada = function(){

                let ultimoElemento = this.cardapio.pop()
                let estabelecimento = 'restaurante'
                if(this.nome.toUpperCase() !== `RICUS`){
                    estabelecimento = `boteco`
                }
             
                return `Bem-vindo ao ${estabelecimento} ${this.nome}! O cardápio de hoje é ${this.cardapio.join(", ")} e ${ultimoElemento}.`
         }  
}

let ricus = new Restaurante("Ricus",["Lagosta Grelhada", "Panna Cotta", "Risoto de Shiitake", "Canapé de Salmão", "Geleia de Damasco"])
let pobris = new Restaurante("Pobris", ["Arroz", "Feijão", "Ovo Cozido"])

console.log(ricus.entrada());
console.log(pobris.entrada());
