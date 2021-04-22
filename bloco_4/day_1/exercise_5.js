let angle_1 = Math.floor(Math.random() * (360 - -360 +1)) + -360;
let angle_2 = Math.floor(Math.random() * (360 - -360 +1)) + -360;
let angle_3 = Math.floor(Math.random() * (360 - -360 +1)) + -360;

console.log("Angulo 1: " +angle_1 +" | Angulo 2: " +angle_2 +" | Angulo 3: " +angle_3);

if (angle_1 <0 || angle_2 <0 || angle_3 <0) {
    console.log("Erro!!! Angulo inválido.");
}
else {
    if ((angle_1 + angle_2 + angle_3) === 180){
        console.log(true);
    }
    else {
        console.log(false);
    }
}