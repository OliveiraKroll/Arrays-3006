// Ordenação crescente
// Descrição: Crie um programa que solicite ao usuário uma lista de números separados por vírgula. 
// Armazene esses números em um array e ordene os elementos do array em ordem crescente. 
// Exiba o array resultante.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite a lista de números, separando por vírgula: ", (lista) => {
    const numeros = lista.split(',').map(num => parseFloat(num.trim())); // Armazena os números em um array

    numeros.sort((a, b) => a - b); // Ordena os elementos do array em ordem crescente

    console.log("Array ordenado em ordem crescente:", numeros); // Exibe o array resultante

    rl.close();
});