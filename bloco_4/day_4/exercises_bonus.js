//                               BLOCO 4 - DIA 4 - JavaScript: Objetos e Funções - Exercícios Bonus
// ****************************************************************************************************************************

/* 1 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa:

        - Uma string é um array de caracteres, então cada elemento do array é uma letra.
        - O valor de cada numeral romano é:

            | I   | 1    |
            | --- | ---- |
            | IV  | 4    |
            | V   | 5    |
            | IX  | 9    |
            | X   | 10   |
            | XL  | 40   |
            | L   | 50   |
            | XC  | 90   |
            | C   | 100  |
            | CD  | 400  |
            | D   | 500  |
            | CM  | 900  |
            | M   | 1000 |

        - Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

        - Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados.
            Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele,
            ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9. */

let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function converteRomanosEmDecimais(algarismo, romanos) {
    let arrayDecimal = [];
    let aux;

    for(let key in algarismo) {
        aux = key;
        switch(key){
            case "I":
                arrayDecimal.push(romanos[aux]);
                break;
            case "V":
                arrayDecimal.push(romanos[aux]);
                break;
            case "X":
                arrayDecimal.push(romanos[aux]);
                break;
            case "L":
                arrayDecimal.push(romanos[aux]);
                break;
            case "C":
                arrayDecimal.push(romanos[aux]);
                break;
            case "D":
                arrayDecimal.push(romanos[aux]);
                break;
            case "M":
                arrayDecimal.push(romanos[aux]);
                break;
            default:
                break;
        };
    };
    return arrayDecimal;
};

console.log(converteRomanosEmDecimais("IIVX", romanos));

