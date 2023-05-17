let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let btMaiorValor = document.querySelector("#btMaiorValor");
let Resultado = document.querySelector("#Resultado");

function compararValores(){
    let valor1 = Number(valor1.value);
    let valor2 = Number(valor2.value);

let MaiorValor;

if (valor1 > valor2){
    MaiorValor = valor1;

}else if (valor2 > valor1){
    MaiorValor = valor2;

}else{
    MaiorValor = "Os Valores São Iguais.";
}

    Resultado.textContent = "O maior valor é:" + MaiorValor;

}

btMaiorValor = function(){
    compararValores();
}