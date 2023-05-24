let inputSabor1 = document.querySelector("#inputSabor1");
let inputSabor2 = document.querySelector("#inputSabor2");
let inputSabor3 = document.querySelector("#inputSabor3");
let inputSabor4 = document.querySelector("#inputSabor4");
let inputRefri = document.querySelector("#inputRefri");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function pedido(){
    let QTDErefri = Number(inputRefri.value);

    let valorPizza = 57.00;

    let valorRefri = 7.00;

    let totalrefri = QTDErefri * valorRefri;
    let totalPagar = valorPizza + totalrefri;

    h2Resultado.innerHTML = "Valor a Pagar: "+totalPagar;

}

btCalcular.onclick = function(){
    pedido();
}