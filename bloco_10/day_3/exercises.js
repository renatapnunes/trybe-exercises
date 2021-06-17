// Exercicio 1

const randomNumber = () => Math.floor(Math.random() * 101);

const transformCapitalLetter = (word) => word.toUpperCase();

const getFirstLetter = (word) => word[0];

const concatenateStrings = (word1, word2) => word1 + word2;

module.exports = { randomNumber, transformCapitalLetter, getFirstLetter, concatenateStrings };