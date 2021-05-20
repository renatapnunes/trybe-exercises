// --------------------------------------------- BLOCO 7 - DIA 1 - JavaScript ES6 ------------------------------------------
// ------------------------------------------------------- Part II ----------------------------------------------------------

/* Exercicio 1
Crie uma função que receba um número e retorne seu fatorial.
    - Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
    - Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator . */

const fatorial = num => {
    if (num > 1) {
        for (let i = num; i > 2; i -= 1) {
            num = num * (i - 1);
        }
        return num;
    } else {
        return 1;
    }
}
console.log(fatorial(4));

// Recursiva
const fatorial = num => {
    if (num > 1) {
        return num * fatorial(num - 1);
    } else {
        return 1;
    }
}
console.log(fatorial(4));

// Bonus
const fatorial = num => num > 1 ? num * fatorial(num - 1) : 1;
console.log(fatorial(4));


/* Exercicio 2
Crie uma função que receba uma frase e retorne qual a maior palavra. */

const longestWord = phrase => {
    let array = phrase.split(' ');
    array = array.sort((a, b) => b.length - a.length);
    return `Maior palavra: ${array[0]}`;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'