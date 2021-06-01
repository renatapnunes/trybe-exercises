// -------------------------------------- BLOCO 8 - DAY 5 - JavaScript ES6 - spread, rest e mais ----------------------------------------

// ----------------------------------------------------- Exercícios de Fixação ----------------------------------------------------------

// --------------------------- spread operator

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'uva', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['iogurte', 'granola', 'chantilly'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));

// --------------------------- array destructuring

// Exercicio 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, imprimeSaudacao] = saudacoes;

imprimeSaudacao(saudacao);

// Exercicio 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
let [pet, liquido, alimento] = [comida, animal, bebida];

console.log(pet, liquido, alimento);

// Exercicio 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

//console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
let [...numbers] = numerosPares.filter((number) => number % 2 === 0);
console.log(numbers);


// --------------------------- default destructuring

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));





