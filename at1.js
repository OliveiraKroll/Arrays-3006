// Acesso a elementos
// Descrição: Crie um programa que solicite ao usuário uma lista de números separados por vírgula. 
// Armazene esses números em um array e exiba o primeiro e o último elemento do array.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


// rl.question("Digite a lista de números, separando por vírgula: ", (lista) => {
//     const numeros = lista.split(',');
//     for (let i = 0; i < numeros.length; i++){
//         console.log(numeros[i].trim());
//     }
//     rl.close();
// });


rl.question("Digite a lista de números, separando por vírgula: ", (lista) => {
    const numeros = lista.split(',').map(num => num.trim()); // Armazena os números em um array

    console.log("Primeiro número:", numeros[0]); // Exibe o primeiro elemento do array
    console.log("Último número:", numeros[numeros.length - 1]); // Exibe o último elemento do array

    rl.close();
});