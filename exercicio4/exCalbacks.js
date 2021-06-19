/*
Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.

*/ 

let acaoCarro = (callback) => {
    console.log(`O carro está ${callback()}`)
}

let andar = () => "andando.";

let parar = () => "parado.";

acaoCarro(andar)
acaoCarro(parar)

