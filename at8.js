// Substituição de valores
// Descrição: Crie um programa que solicite ao usuário uma lista de números separados por vírgula. 
// Armazene esses números em um array e peça ao usuário para digitar um valor a ser substituído por outro valor. Realize a substituição de todos os elementos do array que possuem o valor digitado pelo novo valor informado. 
// Exiba o array resultante.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite a lista de números, separando por vírgula: ", (lista) => {
    const numeros = lista.split(',').map(num => parseFloat(num.trim())); // Armazena os números em um array

    rl.question("Digite o valor a ser substituído: ", (valorAntigo) => {
        rl.question("Digite o novo valor: ", (valorNovo) => {
            numeros.forEach((num, index) => {
                if (num === parseFloat(valorAntigo)) {
                    numeros[index] = parseFloat(valorNovo);
                }
            });

            console.log("Array resultante:", numeros); // Exibe o array resultante

            rl.close();
        });
    });
});