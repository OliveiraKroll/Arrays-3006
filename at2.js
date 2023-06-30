// Soma dos elementos
// Descrição: Crie um programa que solicite ao usuário uma lista de números separados por vírgula. 
// Armazene esses números em um array e calcule a soma de todos os elementos do array. 
// Exiba o resultado.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite a lista de números, separando por vírgula: ", (lista) => {
    const numeros = lista.split(',').map(num => num.trim()); // Armazena os números em um array
    const soma = numeros.reduce((acc, num) => acc + num, 0); // Calcula a soma dos elementos do array

    console.log("A soma dos números é:", soma); // Exibe o resultado da soma

    rl.close();

});