function getRndInteger(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) ) + min)%37;
}
function getInteger(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) ) + min);
}
k=0;
while (k<10){ 
    num=getRndInteger(185,370);
    valorA=getInteger(400,700);
    k+=1;
    console.log("Numero de jugadas= "+k);
    console.log("Valor aleatorio= "+valorA);
    console.log("Numero de la ruleta= "+num);
    console.log ("----------------------")
}
