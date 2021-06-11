let produtos = ["Smartphone", "TV", "Livros", "Roupas", "Laptop"];

console.log("Primeiro vamos mostrar o array completo: ");
console.log(produtos);

console.log("O métodojoin é utilizada para pegar todos os elementos do array e transformá-los em uma string. É possível passar parâmetro dentro da função: ");
console.log(produtos.join(", "));

console.log("O método pop é utilizada para remover o último elemento do array: ");
produtos.pop();
console.log(produtos);

console.log("O método push é utilizada para adicionar um elemento ao final do array: ");
produtos.push("Carro");
console.log(produtos);

console.log("O método shift é utilizada para remover um elemento do começo do array: ");
produtos.shift();
console.log(produtos);

console.log("O método unshift é utilizada para adicionar um elemento ao começo do array: ");
produtos.unshift("Moto");
console.log(produtos);

