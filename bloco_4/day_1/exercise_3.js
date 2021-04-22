let a = Math.floor(Math.random() * (100 - 0 +1)) + 0;
let b = Math.floor(Math.random() * (100 - 0 +1)) + 0;
let c = Math.floor(Math.random() * (100 - 0 +1)) + 0;

if (a>b && a>c){
    console.log("A="+a +" maior que B=" +b +" e maior que C=" +c);
}
else if (b>a && b>c){
    console.log("B="+b +" maior que A=" +a +" e maior que C=" +c);
}
else{
    console.log("C="+c +" maior que A=" +a +" e maior que B=" +b);
}