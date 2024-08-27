const prompt = require('prompt-sync')();

// Exercícios com 'for'
// 1 - Imprima a sequência de Fibonacci até o 10º termo
// Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.

let a = 0;
let b = 1;

for (let i = 0 ; i < 9; i++) {

    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;

}
console.log("") 

// 2 - Verifique se um número é primo
// Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo. Imprima "É primo" ou "Não é primo".
// Dica: Um número primo só é divisível por 1 e por ele mesmo.

let targetNumber = Number(prompt('[primo] '));
console.log("") 

let primoCounter = 0;

for( let i = 1 ; i <= targetNumber ; i++){
    targetNumber % i === 0 ? primoCounter++ : primoCounter;
} 
primoCounter === 2 ? console.log("É primo") : console.log("Não é primo");

// 3 - Imprima um triângulo de números
// Escreva um programa que use um loop for para imprimir um triângulo de números.
// Dica: Utilize dois loops for, um dentro do outro.

const numLinhas = 5;

for (let i = 1; i <= numLinhas; i++) {
    
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += j + ' ';  
    }
    console.log(linha); 
}

// Exercícios com 'while'
// 4 - Calcule o fatorial de um número
// Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.
// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.

let fatorialInput = Number(prompt('[Fatorial]:'))
let fatorial = 1;

while (fatorialInput > 0){
    
    fatorial *= fatorialInput;
    fatorialInput--

} console.log(fatorial)
    

// 5 - Inverta os dígitos de um número
// Escreva um programa que use um loop while para inverter os dígitos de um número fornecido (por exemplo, 1234 deve ser impresso como 4321).
// Dica: Use operações de módulo e divisão para extrair os dígitos.

const prompt5 = require('prompt-sync')();

function inverterDigitos(numero) {
    let invertido = 0;
    while (numero > 0) {
        let digito = numero % 10;
        invertido = (invertido * 10) + digito;
        numero = Math.floor(numero / 10);
    }
    return invertido;
}

let numero5 = Number(prompt5('Insira um número para inverter os dígitos: '));
let numeroInvertido5 = inverterDigitos(numero5);

console.log(`Invertido: ${numeroInvertido5}`)

// 6 - Verifique se um número é palíndromo
// Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.
//  Exercícios com 'do while'

const prompt6 = require('prompt-sync')();

function inverterDigitos(numero) {
    let invertido = 0;
    while (numero > 0) {
        let digito = numero % 10;
        invertido = (invertido * 10) + digito;
        numero = Math.floor(numero / 10);
    }
    return invertido;
}

let numero = Number(prompt6('Insira um número para checar se é palíndromo: '));
let numeroInvertido = inverterDigitos(numero);

numero === numeroInvertido ? console.log(`É palíndromo`) : console.log(`Não é um palíndromo`)


// 7 - Conte o número de dígitos de um número
// Escreva um programa que use um loop do while para contar o número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).
// Dica: Use operações de divisão para reduzir o número até que ele seja zero.
console.log("Numero")
let numero7 = 28756;
let numeroDeDigitos = 0;

do {
    numero7 = Math.floor(numero7 / 10);
    numeroDeDigitos++;
} while (numero7 > 0);

console.log(numeroDeDigitos);


// 8 - Calcule a soma dos dígitos de um número 
// Escreva um programa que use um loop do while para calcular a soma dos dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).
// Dica: Use operações de módulo para extrair os dígitos e depois some-os.

let numero8 = 59317;
let somaDigitos = 0;

do{
    let digitoAtual = Math.floor(numero8 % 10);
    numero8 = Math.floor(numero8 / 10);
    somaDigitos += digitoAtual;
}while(numero8 > 0)
    console.log(somaDigitos)

// 9 - Imprima um padrão de estrela decrescente
// Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.
// Dica: Utilize dois loops, um dentro do outro.

let linhas = 5; 

do {
    let padrao = '';
    for (let i = 0; i < linhas; i++) {
        padrao += '*';
    }
    console.log(padrao);
    linhas--;
} while (linhas > 0);

// 10 - Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).
// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.

let menor_Ex10 = 56;
let maior_Ex10 = 98;
let temp;

do {
    temp = maior_Ex10;
    maior_Ex10 = menor_Ex10 % maior_Ex10;
    menor_Ex10 = temp;
} while (maior_Ex10 !== 0);

let MDC = menor_Ex10;
console.log(MDC);

