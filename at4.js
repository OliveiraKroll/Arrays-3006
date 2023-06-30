// Remoção de elemento
// Descrição: Crie um programa que solicite ao usuário uma lista de nomes separados por vírgula. 
// Armazene esses nomes em um array e peça ao usuário para digitar um nome a ser removido do array. 
// Remova o nome digitado e exiba o array resultante.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite a lista de nomes, separando por vírgula: ", (lista) => {
    const nomes = lista.split(',').map(nome => nome.trim()); // Armazena os nomes em um array

    rl.question("Digite o nome a ser removido: ", (nomeRemover) => {
        const index = nomes.indexOf(nomeRemover); // Encontra o índice do nome a ser removido

        if (index !== -1) {
            nomes.splice(index, 1); // Remove o nome do array usando o índice
            console.log("Nome removido com sucesso!");
        } else {
            console.log("O nome digitado não está presente na lista.");
        }

        console.log("Array resultante:", nomes); // Exibe o array resultante

        rl.close();
    });
});