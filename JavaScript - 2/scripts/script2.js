let inputPessoas = document.querySelector("#inputPessoas");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularQTDE(){
    let pessoas = Number(inputPessoas.value);

    let QTDEovo = pessoas * 2;

    let QTDEqueijo = pessoas * 50;

    resultado.innerHTML = "Quantidade de Ovos: "+QTDEovo + "<br>"+
                          "Quantidade de Queijo (g): "+QTDEqueijo + "<br>";  
}

btCalcular.onclick = function(){
    calcularQTDE();
}