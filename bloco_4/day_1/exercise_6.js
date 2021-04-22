let dadoEntrada = "";
let resposta = ""; //deixa tudo em letra minuscula
let regra = "";

function capturar() {
    dadoEntrada = document.getElementById(entrada).value;
    document.getElementById("valorDigitado").innerHTML = dadoEntrada;

    resposta = dadoEntrada.toLowerCase();
    switch (resposta) {
        case (peao):
            regra = "Movimenta para frente, uma ou duas casas";
            break;
        case (torre):
            regra = "Movimenta na horizontal e na vertical, quantas casas desejar";
            break;
        case (cavalo):
            regra = "Movimenta em L, quatro casas";
            break;
        case (bispo):
            regra = "Movimenta nas diagonais, quantas casas desejar";
            break;
        case (rainha):
            regra = "Movimenta em todas as direções, quantas casas desejar";
            break;
        case (rei):
            regra = "Movimenta para qualquer casa ao seu redor, uma por vez";
        default:
            regra = "Erro. Peça inválida!";
    }
    
    document.getElementById("exibe_regra").innerHTML = regra;
}