let valor1 = document.querySelector("#valor1");
let btparImpar = document.querySelector("#btparImpar");
let Resultado = document.querySelector("#Resultado");

function ParouImpar(){
    let valor = Number(valor1.value);

    if (valor % 2 !==0){
        Resultado.textContent = "O numero é Impar.";
    } else {
        Resultado.textContent = "O numero é par.";
    }
}

btparImpar = function(){
    ParouImpar();
}