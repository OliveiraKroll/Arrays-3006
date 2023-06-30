// Concatenação de arrays
// Descrição: Crie um programa que solicite ao usuário duas listas de números separadas por vírgula. 
// Armazene esses números em dois arrays diferentes e concatene os dois arrays em um único array. 
// Exiba o array resultante.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite a primeira lista de números, separando por vírgula: ", (lista1) => {
    rl.question("Digite a segunda lista de números, separando por vírgula: ", (lista2) => {
        const numeros1 = lista1.split(',').map(num => parseFloat(num.trim())); // Armazena os números da primeira lista em um array
        const numeros2 = lista2.split(',').map(num => parseFloat(num.trim())); // Armazena os números da segunda lista em um array

        const resultado = numeros1.concat(numeros2); // Concatena os dois arrays em um único array

        console.log("Array resultante:", resultado); // Exibe o array resultante

        rl.close();
    });
});