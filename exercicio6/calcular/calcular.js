let somar = (num1, num2) => {
    return `${num1}+${num2} = ${num1+num2} `;
}

let subtrair = (num1, num2) => {
    return `${num1}-${num2} = ${num1-num2} `;
}

let dividir = (num1, num2) => {
    return `${num1}/${num2} = ${num1/num2} `;
}

let multiplicar = (num1, num2) => {
    return `${num1}*${num2} = ${num1*num2} `;
}

module.exports = [somar, subtrair, dividir, multiplicar]


