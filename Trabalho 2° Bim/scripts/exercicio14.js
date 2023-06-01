let inputValor = document.querySelector("#inputValor");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularConta(){
    let vlr1 = Number(inputValor.value);

    let carlos = vlr1 / 3;
    let andre = vlr1 / 3;
    let felipe = vlr1 / 3;

    h2Resultado.innerHTML = "Carlos vai pagar: R$ "+carlos.toFixed(0) +"<br>"+
                            "Andre vai pagar: R$ "+andre.toFixed(0) +"<br>"+
                            "Felipe vai pagar: R$ "+felipe.toFixed(2) +"<br>";
}

btCalcular.onclick = function(){
    calcularConta();
}