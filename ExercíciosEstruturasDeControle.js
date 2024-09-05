const prompt = require('prompt-sync')();

console.log("Exercícios com if " + 
"1 - Verifique se um número é positivo, negativo ou zero" +
"Escreva um programa que leia um número e use uma estrutura if para verificar se o número é positivo, negativo ou zero. Imprima uma" +
"mensagem apropriada para cada caso."
)
let numeroEX1 = Number(prompt('[Digite um número] '));
if (numeroEX1 === 0) {
    console.log("O número é zero!")
} else {
    numeroEX1 > 0 ? console.log("O número é positivo!") : console.log("O número é negativo!");
}console.log(" ")




console.log("2 - Verifique se um ano é bissexto " +
    "Escreva um programa que leia um ano e use uma estrutura if para verificar se o ano" +
    "é bissexto. Um ano é bissexto se for divisível por 4, " +
    "mas não por 100, exceto se também for divisível por 400. Imprima uma mensagem apropriada."
)
let anoEX2 = Number(prompt('[Digite um ano] '))

if ((anoEX2 % 4 === 0 && anoEX2 % 100 !== 0) || (anoEX2 % 400 === 0)) {
    console.log(`${anoEX2} é um ano bissexto.`);
} else {
    console.log(`${anoEX2} não é um ano bissexto.`);
}console.log(anoEX2);
console.log(" ")




console.log("// Exercícios com if/else " +
"3 - Calcule a média de três números e determine o conceito" +
"Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else " + 
"para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito." +
"Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.")

let notaEX3_1 = Number(prompt('[Digite uma nota] '))
let notaEX3_2 = Number(prompt('[Digite uma nota] '))
let notaEX3_3 = Number(prompt('[Digite uma nota] '))

let media = (notaEX3_1 + notaEX3_2 + notaEX3_3) / 3;
if (media < 2.5) {
    console.log("D")
} else if (media > 2.5 && media < 5.0) {
    console.log("C")
} else if (media > 5.0 && media < 7.5) {
    console.log("B")
} else {
    console.log("A")
}console.log(" ")




console.log(" 4 - Verifique se um número é par ou ímpar "+
"Escreva um programa que leia um número e use uma estrutura  if/else para verificar "+
"se o número é par ou ímpar. Imprima uma mensagem apropriada.")
let numeroEX4 = Number(prompt('[Digite um numero] '))
numeroEX4 % 2 === 0 ? console.log("É par!") : console.log("É impar!");
console.log(" ")




console.log("5 - Verifique a categoria de um nadador "+
"Escreva um programa que leia a idade de um nadador e use uma estrutura if/else para determinar a categoria do nadador "+
"de acordo com a idade:"+
            "Infantil A: 5 - 7 anos"+
            "Infantil B: 8 - 10 anos"+
            "Juvenil A: 11 - 13 anos"+
            "Juvenil B: 14 - 17 anos"+
            "Adulto: 18 anos ou mais")
let idadeEX5_1 = Number(prompt('[Digite uma idade] '))
if (idadeEX5_1 > 4 && idadeEX5_1 <= 7) {
    console.log("Infantil A")
} else if (idadeEX5_1 > 7 && idadeEX5_1 <= 10) {
    console.log("Infantil B")
} else if (idadeEX5_1 > 10 && idadeEX5_1 <= 13) {
    console.log("Juvenil A")
} else if (idadeEX5_1 > 13 && idadeEX5_1 <= 17) {
    console.log("Juvenil B")
} else {
    console.log("Adulto")
}console.log(" ")




console.log("Exercícios com switch "+
"6 - Verifique o dia da semana "+
"Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. (1 = "+
"Domingo, 2 = Segunda-feira, etc.)")
let diaEX6 = Number(prompt('[Digite um número de 1 a 7] '))
switch (diaEX6) {
    case 1:console.log("Segunda feira!");break;
    case 2:console.log("Terça feira!");break;
    case 3:console.log("Quarta feira!");break;
    case 4:console.log("Quinta feira!");break;
    case 5:console.log("Sexta feira!"); break;
    case 6:console.log("Sábado!");break;
    case 7:console.log("Domingo!");break;
    default:break;
}console.log(" ")




console.log("7 - Calcule o valor de uma expressão matemática simples" + 
"Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado da operação." +
"Imprima o resultado. Dica: Utilize os operadores aritméticos em cada caso do switch."
)

let numeroEX7_1 = Number(prompt('[Digite um número '))
let numeroEX7_2 = Number(prompt('[Digite um número '))
let operadorEX7 = String(prompt('[Digite o simbolo da operação] '))

switch (operadorEX7) {
    case "+":
        console.log(numeroEX7_1 + numeroEX7_2)
        break;
    case "-":
        console.log(numeroEX7_1 - numeroEX7_2)
        break;
    case "*":
        console.log(numeroEX7_1 * numeroEX7_2)
        break;
    case "/":
        numeroEX7_2 === 0 ? numeroEX7_2 = 1 : numeroEX7_2;
        console.log(numeroEX7_1 / numeroEX7_2)
        break;
    default:
        break;
}console.log(" ")




console.log("8 - Verifique a estação do ano" +
"Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir a estação do ano correspondente." + 
"(1 = Primavera, 2 = Verão, 3 = Outono, 4 = Inverno')")
let numeroEX8 = Number(prompt('[Digite um número '))

switch (numeroEX8) {
    case 1:
        console.log("Primavera")
        break;
    case 2:
        console.log("Verão")
        break;
    case 3:
        console.log("Outono")
        break;
    case 4:
        console.log("Inverno")
        break;
    default:
        break;
}console.log(" ")




console.log("Exercícios combinados" +
"9 - Verifique a faixa etária de uma pessoa "+
"Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária: "+
            "Criança: 0 - 12 anos"+
            "Adolescente: 13 - 17 anos"+
            "Adulto: 18 - 59 anos"+
            "Idoso: 60 anos ou mais"+
"Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária.");

let numeroEX9 = Number(prompt('[Digite um número para faixa etária '))
let faixaEtaria;

if (numeroEX9 > 0 && numeroEX9 < 13) {
    faixaEtaria = "Criança";
} else if(numeroEX9 >= 13 && numeroEX9 < 18){
    faixaEtaria = "Adolescente";
} else if(numeroEX9 >= 18 && numeroEX9 < 59){
    faixaEtaria = "Adulto";
} else {
    faixaEtaria = "Idoso";
}

switch (faixaEtaria) {
    case "Criança":
        console.log("É uma criança!");
        break;
    case "Adolescente":    
        console.log("É um adolescente!")
        break;
    case "Adulto":
        console.log("É um adulto!")
        break
    case "Idoso":
        console.log("É um idoso!")
        break        
    default:break;
}

console.log("10 - Calcule o IMC e determine a categoria"+
"Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura"+
"if/else para determinar a categoria:"+
            "Abaixo do peso: IMC < 18.5"+
            "Peso normal: IMC 18.5 - 24.9"+
            "Sobrepeso: IMC 25 - 29.9"+
            "Obesidade grau I: IMC 30 - 34.9"+
            "Obesidade grau II: IMC 35 - 39.9"+
            "Obesidade grau III: IMC >= 40"+
"Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).")

let pesoEX10 = Number(prompt('[Digite um número para peso '));
let alturaEX10 = Number(prompt('[Digite um número para altura em cm '));

let IMC = pesoEX10 / (alturaEX10**2);

if (IMC < 18.5) {
    console.log("Abaixo do peso!")
} else if(IMC >= 18.5 && IMC < 24.9) {
    console.log("Peso normal!")
} else if(IMC >= 25 && IMC < 29.9){
    console.log("Sobrepeso!")
} else if(IMC >= 30 && IMC < 34.9){
    console.log("Obesidade grau I!")
} else if(IMC >= 35 && IMC < 39.9){
    console.log("Obesidade grau II!")
} else {
    console.log("Obesidade grau III!")
} console.log(IMC);