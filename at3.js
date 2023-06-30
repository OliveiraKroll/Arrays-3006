// Maior e menor valor
// Descrição: Crie um programa que solicite ao usuário uma lista de números separados por vírgula. 
// Armazene esses números em um array e determine o maior e o menor valor presente no array. 
// Exiba os resultados.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


rl.question("Digite a lista de números, separando por vírgula: ", (lista) => {
    const numeros = lista.split(',').map(num => parseFloat(num.trim())); // Armazena os números em um array

    const maiorValor = Math.max(...numeros); // Determina o maior valor do array
    const menorValor = Math.min(...numeros); // Determina o menor valor do array

    console.log("Maior valor:", maiorValor); // Exibe o maior valor
    console.log("Menor valor:", menorValor); // Exibe o menor valor

    rl.close();
});

// Neste programa, seguimos a mesma estrutura básica dos códigos anteriores. Após a entrada do usuário, usamos o método split(',') para dividir a string em um array de substrings separadas por vírgula. Em seguida, aplicamos o método map() para percorrer cada elemento do array e converter as substrings em números usando parseFloat().

// Para determinar o maior e o menor valor do array, utilizamos as funções Math.max() e Math.min(). Usamos o spread operator (...) para passar cada elemento do array como argumento individual para essas funções. Dessa forma, é possível determinar o maior e o menor valor presentes no array.

// Por fim, exibimos o maior valor e o menor valor usando console.log().

// Espero que isso ajude! Se você tiver mais dúvidas, fique à vontade para perguntar.
