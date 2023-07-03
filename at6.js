// Média de valores pares
// Descrição: Crie um programa que solicite ao usuário uma lista de números separados por vírgula. 
// Armazene esses números em um array e calcule a média apenas dos valores pares presentes no array. 
// Exiba o resultado.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


rl.question("Digite a lista de números, separando por vírgula: ", (listaNumeros) => {

const numeros = listaNumeros.split(',').map(num => parseFloat(num.trim()));
const numerosPares = numeros.filter(num => num % 2 === 0);

if(numerosPares.length > 0){
    const somaPares = numerosPares.reduce((acc, num) => acc + num);
    const mediaPares = somaPares / numerosPares.length;
    console.log("O resultadio da média dos pares é: ", mediaPares);
} else {
    console.log("Não há númeos pares ou os valores são inválidos");
}

rl.close();


});
