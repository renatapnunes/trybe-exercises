// Expressão para gerar numeros aleatorios
//Math.floor(Math.random() * (max - min +1)) + min
let nota = Math.floor(Math.random() * (100 - 0 +1)) + 0

console.log(nota);

if(nota >= 80){
    console.log("Parabéns, você foi aprovada(o)!");
}
else if (nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera.");
}
else{
    console.log("Você foi reprovada(o).");
}