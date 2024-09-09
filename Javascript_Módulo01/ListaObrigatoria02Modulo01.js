const prompt = require('prompt-sync')();

// console.log(" ");
//console.log("// 1. Acessando Propriedades de Objetos" +
//     "// Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor." +
//     "// Use for in para iterar sobre as propriedades e exibir seus valores no console.");

//     let carroEX1 = {
//         marca: "Toyota",
//         modelo: "Yaris Hatch",
//         ano: 2015,
//         cor: "Azul"
//     }

//     for (value in carroEX1) {
//              console.log(carroEX1[value]);
//     }console.log(" ")

// console.log(" ");
// console.log("// 2. Verificando Propriedades" +
//     "// Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero." +
//     "// Verifique se a propriedade editora existe no objeto usando for in." +
//     "// Se não existir, adicione essa propriedade ao objeto.");

//     let livroEX2 = {
//         titulo: "O Homem do Subsolo",
//         autor: "Fiodor Dostoíevski",
//         anoPublicacao: 1864,
//         genero: "filosofia"
//     };
//     livroEX2.value === "editora" ? livroEX2 : livroEX2.editora = "Editora desconhecida";
//     for (value in livroEX2) {
//         console.log(livroEX2[value]);
//     };console.log(" ");

// console.log(" ")
// console.log("// 3. Filtrando Propriedades de Objetos" +
//     "// Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto" +
//     "// contendo apenas as propriedades cujo valor seja maior que um valor específico." +
//     "// Use for in para filtrar as propriedades.");

//     function ProdutoEX3(nome, valor, nicho) {
//         this.nome = nome;
//         this.valor = valor;
//         this.nicho = nicho;
//     }

//     function criaProduto() {
//         let nome, valor, nicho;

//         do {
//             nome = String(prompt('[Digite o nome:]'));
//         } while (nome === undefined || nome === null || nome.trim() === '');

//         do {
//             valor = Number(prompt('[Digite o valor:]'));
//         } while (isNaN(valor) || valor <= 0);

//         do {
//             nicho = String(prompt('[Digite um nicho:]'));
//         } while (nicho === undefined || nicho === null || nicho.trim() === '');

//         return new ProdutoEX3(nome, valor, nicho);
//     }

//     let produtoTeste = criaProduto();
//     for (const value in produtoTeste) {
//         console.log(produtoTeste[value])
//     }

//  console.log(" ")
// console.log("// 4. Iterando Sobre Arrays de Objetos" +
//     "// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa"+
//     "//uma pessoa com nome, idade, e cidade." +
//     "// Use for of para exibir as informações de cada pessoa no console.");
// let arrayPessoasEX4 = [
//     pessoa1 = {
//         nome : "Joao",
//         idade : 25,
//         cidade : "Florianópolis"
//     },
//     pessoa2 = {
//         nome : "Camila",
//         idade : 17,
//         cidade : "São Paulo"
//     },
//     pessoa3 = {
//         nome : "Magnus",
//         idade : 42,
//         cidade : "Brasília"
//     }
// ];    
// for (const value of arrayPessoasEX4) {
//     console.log(value);
// }    

// console.log(" ")
// console.log("// 5. Calculando Valores em Arrays de Objetos" +
//     "// Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2." +
//     "// Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.");

// let arrayAlunosEX5 = [
//     aluno1 = {
//         nome: "Yago",
//         nota1: 8.5,
//         nota2: 6.75,
//         media: getMediaEX5(8.5 , 6.75).toFixed(2)
//     },
//     aluno2 = {
//         nome: "Bruna",
//         nota1: 9.2,
//         nota2: 8.1,
//         media: getMediaEX5(9.2 , 8.1).toFixed(2)
//     },
//     aluno3 = {
//         nome: "Hugo",
//         nota1: 6.1,
//         nota2: 4.32,
//         media: getMediaEX5(6.1 , 4.32).toFixed(2)
//     }
// ];

// function getMediaEX5(nota1 , nota2){
//     return ( (nota1 + nota2) / 2 )
// }

// for (const value of arrayAlunosEX5) {
//     console.log(value);
// }    

// console.log(" ")
// console.log("// 6. Filtrando Arrays de Objetos" +
// "// Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario." +
// "// Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.");

// let funcionariosArrayEX6 = [
//     funcionario1 = {
//         nome: "Otávio",
//         cargo: "Gestor de Processos",
//         salario: 4232.99
//     },
//     funcionario2 = {
//         nome: "Octávia",
//         cargo: "Consultora de Marketing Pleno",
//         salario: 2752.99
//     },
//     funcionario3 = {
//         nome: "Jonathan",
//         cargo: "Auxiliar de Logística",
//         salario: 2232.65
//     }
// ];
// for (const value of funcionariosArrayEX6) {
//     if (value.salario > 2500) {
//         console.log(value);
//     }
// }

// console.log(" ")
//     console.log("// 7. Modificando Objetos em um Array" +
//         "// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto." +
//         "// Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.");
// let arrayProdutosEX7 = [
//     produto1 = {
//         nome: "Água Sanitária",
//         preco: 12.35,
//         desconto: (12.35 * 0.1).toFixed(2)
//     },
//     produto2 = {
//         nome: "Kit Churrasco",
//         preco: 168.79,
//         desconto: (168.79 * 0.1).toFixed(2)
//     },
//     produto3 = {
//         nome: "Smartwatch",
//         preco: 269.99,
//         desconto: (269.99 * 0.1).toFixed(2)
//     }
// ]
// for (const value of arrayProdutosEX7) {console.log(value);}
// console.log("");
// arrayProdutosEX7.forEach(value => {
//     value.preco = (value.preco - value.desconto).toFixed(2)
//     value.desconto = 0;
// });
// for (const value of arrayProdutosEX7) {console.log(value);}        

// console.log(" ")
//     console.log("// 8. Criando Novos Arrays a Partir de Objetos" +
//         "// Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento." +
//         "// Use forEach para criar um novo array contendo apenas os títulos dos filmes.");

// let arrayFilmesEX8 = [
//     filme1 = {
//         titulo: "O Senhor dos Aneis, O Retorno do Rei",
//         diretor: "Peter Jackson",
//         anoLancamento: "2002"
//     },
//     filme2 = {
//         titulo: "O Babadook",
//         diretor: "Jenifer Kent",
//         anoLancamento: "2014"
//     },
//     filme3 = {
//         titulo: "IT",
//         diretor: "Tommy Lee",
//         anoLancamento: "1990"
//     },
// ];
// let arraySomenteTitulosEX8 = [];
// arrayFilmesEX8.forEach(value => {
//     arraySomenteTitulosEX8.push(value.titulo);
// });
// console.log(arraySomenteTitulosEX8);        

// console.log(" ")
//     console.log("// 9. Contabilizando Elementos com uma Condição" +
//         "// Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade." +
//         "// Use forEach para contar quantos clientes têm mais de 30 anos.");
// let arrayClientesEX9 = [
//     cliente1 = {
//         nome: "Joel",
//         idade: 39,
//         cidade: "Itatiba"
//     },
//     cliente2 = {
//         nome: "Gabriel",
//         idade: 25,
//         cidade: "Botucatu"
//     },
//     cliente3 = {
//         nome: "Bartolomeu",
//         idade: 31,
//         cidade: "Fortaleza"
//     },
// ];    
// let contadorEX9 = 0;
// arrayClientesEX9.forEach(value => {
//     if (value.idade > 30) {
//         contadorEX9++
//     }
// });
// console.log("");
// console.log(`O número de clientes com mais de 30 anos é: ${contadorEX9}`)    

// console.log(" ")
// console.log("// 10. Criando Relatórios com Objetos e Arrays" +
// "// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor." +
// "// Use forEach para calcular o valor total de vendas de todos os produtos.");
// console.log(" ")

// let arrayVendasEX10 = [
//     venda1 = {
//         produto: "Kit Churrasco",
//         quantidade: 1,
//         valor: 232.78
//     },
//     venda2 = {
//         produto: "Robô Aspirador de Pó",
//         quantidade: 1,
//         valor: 1369.99
//     },
//     venda3 = {
//         produto: "Esfregao Multifuncoes",
//         quantidade: 2,
//         valor: 69.99
//     }
// ];
// let valorVendasTotalEX10 = 0;
// arrayVendasEX10.forEach(value => {
//     let tmpValorTotal = (value.valor * value.quantidade);
//     valorVendasTotalEX10 += tmpValorTotal;
// });
// console.log(valorVendasTotalEX10);

// console.log(" ")
//     console.log("// 11. Agrupando Elementos com forEach" +
//         "// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade." +
//         "// Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.");
// console.log(" ")

// let arrayPedidosEX11 = [
//     {cliente: "Junior", produto: "Kit Churrasco", quantidade: 1},
//     {cliente: "Carmona", produto: "Kit Maquiagem", quantidade: 2},
//     {cliente: "Carmona", produto: "Bota", quantidade: 1},
//     {cliente: "Junior", produto: "Mouse", quantidade: 1},
// ];

// let arrayAgrupadosPorCliente = [];

// arrayPedidosEX11.forEach(pedido => {
//     let clienteExistente = arrayAgrupadosPorCliente.find(c => c.cliente === pedido.cliente);

//     if (clienteExistente) {
//         clienteExistente.qtdProdutos += pedido.quantidade;
//     } else {
//         arrayAgrupadosPorCliente.push({ cliente: pedido.cliente, qtdProdutos: pedido.quantidade });
//     }
// });
// console.log(arrayAgrupadosPorCliente);

// console.log(" ")
//     console.log("// 12. Atualizando um Array de Objetos" +
//         "// Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo." +
//         "// Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.");
// console.log(" ")

// let arrayEstoqueEX12 = [
//     estoque1 = {
//         produto : "Sabonete",
//         qtd : 380,
//         minimo : 650
//     },
//     estoque2 = {
//         produto : "Extrato de Tomate",
//         qtd : 1123,
//         minimo : 800
//     },
//     estoque3 = {
//         produto : "Bolacha Recheada",
//         qtd : 156,
//         minimo : 300
//     }
// ];
// console.log(arrayEstoqueEX12);
// console.log(" ");
// arrayEstoqueEX12.forEach(value => {
//     value.qtd > value.minimo ? value.qtd : value.qtd *= 2;
// });
// console.log(arrayEstoqueEX12);

// console.log(" ")
// console.log("// 13. Implementando um Carrinho de Compras" +
//     "// Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos." +
//     "// Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario." +
//     "// Use forEach para calcular o valor total do carrinho.");
// console.log(" ")

// let objectCarrinhoEX13 = {
//     itens: [
//         item1 = { nome: "Sabonete Pantene", qtd: 6, precoUnt: 2.19 },
//         item2 = { nome: "Chinelo Havaianas", qtd: 2, precoUnt: 39.99 },
//         item3 = { nome: "Bolacha Recheada", qtd: 12, precoUnt: 1.99 }
//     ],
//     valorTotal: 0
// }
// objectCarrinhoEX13.itens.forEach(value => {
//     let tmp = value.precoUnt * value.qtd;
//     objectCarrinhoEX13.valorTotal += tmp;
// });
// console.log(`O valor total do carrinho é de: ${objectCarrinhoEX13.valorTotal}`);

// console.log(" ")
//     console.log("// 14. Manipulando Objetos Complexos" +
//         "// Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos." +
//         "// Cada departamento tem um nome e uma lista de funcionarios." +
//         "// Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.");
// console.log(" ")

// let objectEmpresaEX14 = {
//     departamentos: [
//         departamento1 = {
//             nome: "Marketing",
//             funcionarios : ["Mauro","Silvia","Junior"]
//         },
//         departamento2 = {
//             nome: "Compras",
//             funcionarios : ["Carla","Derci","Luiz"]
//         },
//         departamento3 = {
//             nome: "Recursos Humanos",
//             funcionarios : ["Aristeu","Lidia","Ulisses"]
//         }
//     ]
// }

// for (const departamento of objectEmpresaEX14.departamentos) {
//     for (const value in departamento) {
//        console.log(departamento[value]);
//     }
// }

console.log(" ")
    console.log("// 15. Filtrando e Somando Valores" +
        "// Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor." +
        "// Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.");
console.log(" ")    