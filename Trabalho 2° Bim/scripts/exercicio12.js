let inputNumero = document.querySelector("#inputNumero");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function lerNumero(){
    let vlr1 = Number(inputNumero.value);

    let centena = vlr1 / 100;
    let dezena = parseInt(vlr1 / 10);
    let unidade = vlr1 % 1;

    h2Resultado.innerHTML = "Centena: " +centena +"<br>"+
                            "Dezena: " +dezena +"<br>"+
                            "Unidade: " +unidade;
}

btCalcular.onclick = function(){
    lerNumero();
}