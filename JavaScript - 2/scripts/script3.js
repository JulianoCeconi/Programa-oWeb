let inputNumero1 = document.querySelector("#inputNumero1");
let inputNumero2 = document.querySelector("#inputNumero2");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let vlr1 = Number(inputNumero1.value);
    let vlr2 = Number(inputNumero2.value);

    let soma = vlr1 + vlr2;

    let menos = vlr1 - vlr2;

    let vezes = vlr1 * vlr2;

    let dividido = vlr1 / vlr2;

    h3Resultado.innerHTML = "Soma: "+soma + "<br>"+
                            "Subtracao: "+menos + "<br>"+
                            "Multiplicacao: "+vezes + "<br>"+
                            "Divisao: "+dividido + "<br>";
}

btCalcular.onclick = function(){
    calcular();
}