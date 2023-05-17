let inputNumero = document.querySelector("#inputNumero");
let inputNumero2 = document.querySelector("#inputNumero2");
let btSomar = document.querySelector("#btSomar");
let Resultado = document.querySelector("#Resultado");

function somar(){
    let vlr1 = Number(inputNumero.value);
    let vlr2 = Number(inputNumero2.value);

    //let result = Number(input01.value) + Number(input02.value);
    //h1Resultado = result;

    Resultado.textContent = vlr1 + vlr2;

}

btSomar.onclick = function(){
    somar();
}