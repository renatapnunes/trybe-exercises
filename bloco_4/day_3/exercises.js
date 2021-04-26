// BLOCO 4 - DIA 4 - JavaScript: Lógica de Programação e Algoritmos
//-------------------------------------------------------------------------------------------------

/* 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n: */

let n = Math.ceil(Math.random()*10);

for(let i = 0; i < n; i += 1){
    let linha = "";
    for(let j = 0; j < n; j += 1){
       linha += "*";
    }
    console.log(linha);
};

/* 2 - Faça o mesmo que antes, mas que imprima um triângulo retângulo com n asteriscos de base: */

let n = Math.ceil(Math.random()*10);
let linha = "";

for(let j = 0; j < n; j += 1){
    linha += "*";
    console.log(linha);
};

/* 3 - Agora inverta o lado do triângulo: */

let n = Math.ceil(Math.random()*10);

for(let i = 1; i <= n; i += 1) {
    let linha = "";
    for(let j = n; j <= 1; j -= 1) {
        linha += " ";
    };
    for(let k = 0; k < n; k += 1) {
        linha += "*";
    };
    console.log(linha);
};