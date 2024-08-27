const prompt = require('prompt-sync')();

// console.log("// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar" +
//     "// utilizando uma estrutura de controle if.")
// let numeroEX1 = Number(prompt('[Digite um numero para par ou impar!] '))
// numeroEX1 % 2 === 0 ? console.log("É par!") : console.log("É impar!");
// console.log(" ")




// console.log("// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança," +
//     "// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de" +
//     "// controle if-else.")
// let numeroEX2 = Number(prompt('[Digite um número para faixa etária] '))
// let faixaEtaria;
// if (numeroEX2 > 0 && numeroEX2 < 13) {
//     faixaEtaria = "Criança";
// } else if (numeroEX2 >= 13 && numeroEX2 < 18) {
//     faixaEtaria = "Adolescente";
// } else if (numeroEX2 >= 18 && numeroEX2 < 59) {
//     faixaEtaria = "Adulto";
// } else {
//     faixaEtaria = "Idoso";
// } console.log(faixaEtaria);console.log(" ");




// console.log("// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como" +
//     "// Aprovado, Recuperação, ou Reprovado utilizando if-else if.")
// let numeroEX3 = Number(prompt('[Digite uma nota de 0 a 10] '))

// if (numeroEX3 >= 7) {
//     console.log("Aprovado!")
// } else if (numeroEX3 < 7 && numeroEX3 > 5) {
//     console.log("Recuperação!")
// } else {
//     console.log("Reprovado!")
// }console.log(" ");




// console.log("// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções." +
//     "// Utilize switch-case para implementar a lógica de cada opção selecionada.")
// console.log("1 - Dia \n" + "2 - Noite \n" + "3 - Tarde")
// let numeroEX4 = Number(prompt('[Digite uma alternativa!] '))
// switch (numeroEX4) {
//     case 1:
//         console.log("Selecionado dia!")
//         break;
//     case 2:
//         console.log("Selecionado noite!")
//         break;
//     case 3:
//         console.log("Selecionado tarde!")
//         break;
//     default: break;
// }console.log(" ");




// console.log("// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e" +
//     "// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)" +
//     "// utilizando if-else.")
//     let pesoEX5 = Number(prompt('[Digite um número para peso '));
//     let alturaEX5 = Number(prompt('[Digite um número para altura em cm '));
//     let IMC = pesoEX5 / (alturaEX5**2);
//     if (IMC < 18.5) {
//         console.log("Abaixo do peso!")
//     } else if(IMC >= 18.5 && IMC < 24.9) {
//         console.log("Peso normal!")
//     } else if(IMC >= 25 && IMC < 29.9){
//         console.log("Sobrepeso!")
//     } else if(IMC >= 30 && IMC < 34.9){
//         console.log("Obesidade grau I!")
//     } else if(IMC >= 35 && IMC < 39.9){
//         console.log("Obesidade grau II!")
//     } else {
//         console.log("Obesidade grau III!")
//     } console.log(IMC);console.log(" ");




console.log("// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos" +
    "// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:" +
    "// Isósceles, escaleno ou eqüilátero." +
    "// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B" +
    "// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)" +
    "// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)" +
    "// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)")



    console.log(" ");
console.log("// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se" +
    "// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs" +
    "// compradas, calcule e escreva o valor total da compra.")



//     console.log(" ");
// console.log("// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)" +
//     "// e escreve-los em ordem crescente.")
//     let numero1_EX8 = Number(prompt('[Digite um número]'))
//     let numero2_EX8 = Number(prompt('[Digite um número]'))

//     let maior = numero1_EX8 > numero2_EX8 ? numero1_EX8 : numero2_EX8;
//     let menor = numero1_EX8 < numero2_EX8 ? numero1_EX8 : numero2_EX8;

//     console.log(`${menor + " " + maior}`);console.log(" ");




// console.log("// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console" +
//     "// utilizando um loop for.")
//     for (let i = 10; i > 0 ; i--) {
//       console.log(i); 
//     }console.log(" ");




// console.log("// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.")
// let numeroEX10 = Number(prompt('[Digite um número]'));
// for (i = 0 ; i < 10 ; i++){
//     console.log(numeroEX10)
// }console.log(" ")




// console.log("// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total" +
//     "// utilizando um loop for.")
// let somaEX11 = 0;
//     for (let i = 0; i < 5; i++) {
//        let tempNumberEX11 = Number(prompt('[digite um número]'))
//        somaEX11 += tempNumberEX11;
//     }console.log(somaEX11);console.log(" ");




// console.log("// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a" +
//     "// 10) utilizando um loop for.")
//     let numeroEX12 = Number(prompt('[digite um numero]'));
    
//     for (let i = 1; i < 11; i++) {
//          console.log(`${numeroEX12 * i}`);
//     }console.log(" ");




console.log("// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer" +
    "// a média aritmética desses números.")
let SumEX13 = 0;
let averageCountEX13 = 0;
let tempNumberEX13;
do{
    tempNumberEX13 = Number(prompt('[Digite um número]'));
    if(tempNumberEX13 !== 0)
        {
            SumEX13 += tempNumberEX13;
            averageCountEX13++;
        }
}
while(tempNumberEX13 !== 0) 
let resultEX13 = SumEX13 / averageCountEX13;
console.log(resultEX13);console.log(" ");    




console.log("// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário" +
    "// utilizando um loop for ou while.")
    let fatorialInputEX14 = Number(prompt('[Fatorial]:'))
    let fatorial = 1;
    while (fatorialInputEX14 > 0){
        fatorial *= fatorialInputEX14;
        fatorialInputEX14--
    } console.log(fatorial)
console.log(" ");




console.log("// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de" +
    "// Fibonacci utilizando um loop for.");
    let aEX15 = 0;
    let bEX15 = 1;
for (let i = 0 ; i < 9; i++) {
    console.log(a);
    let temp = aEX15 + bEX15;
    aEX15 = bEX15;
    bEX15 = temp;
}console.log(" ") 