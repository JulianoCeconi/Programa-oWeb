let inputNumero1 = document.querySelector("#inputNumero1");
let inputNumero2 = document.querySelector("#inputNumero2");
let btCalcular = document.querySelector("#btCalcular");

function maiorMenor(){
    let vlr1 = Number(inputNumero1.value);
    let vlr2 = Number(inputNumero2.value);

    if(vlr1 > vlr2){
        alert('O Primeiro Número é Maior');
    }else if(vlr1 < vlr2){
        alert('O Segundo Número é Maior');
    }else
        alert('Os Números sao iguais');
}

btCalcular.onclick = function(){
    maiorMenor();
}