let status = "reprovado";

switch(status){
    case "aprovado":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera.");
        break;
    case "reprovado":
        console.log("Você foi reprovada(o).");
        break;
    default:
        console.log("Não se aplica.");
}