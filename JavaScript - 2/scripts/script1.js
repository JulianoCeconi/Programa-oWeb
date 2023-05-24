let dolar = document.querySelector("#dolar");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularPorcentagem(){
    let cotacao = Number(dolar.value);

    let resultado1 = (cotacao +(cotacao * 1/100));

    let resultado2 = (cotacao +(cotacao * 2/100));

    let resultado5 = (cotacao +(cotacao * 5/100));

    let resultado10 = (cotacao +(cotacao * 10/100));

    resultado.innerHTML = "1%: "+resultado1 + "<br>"+
                          "2%: "+resultado2 + "<br>"+
                          "5%: "+resultado5 + "<br>"+
                          "10%: "+resultado10 + "<br>";  
}

btCalcular.onclick = function(){
    calcularPorcentagem();
}