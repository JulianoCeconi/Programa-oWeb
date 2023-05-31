let inputDias = document.querySelector("#inputDias");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaAnos(){
    let vlr1 = Number(inputDias.value);

    let anos =  vlr1 / 365;
    

    h2Resultado.innerHTML = "Anos: " +anos +"<br>";
}

btCalcular.onclick = function(){
    calculaAnos();
}