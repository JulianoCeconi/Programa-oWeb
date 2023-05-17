let inputNumero = document.querySelector("#inputNumero");
let inputNumero2 = document.querySelector("#inputNumero2");
let btSubtrair = document.querySelector("#btSubtrair");
let Resultado = document.querySelector("#Resultado");

function subtrair(){
    let vlr1 = Number(inputNumero.value);
    let vlr2 = Number(inputNumero2.value);

    //let result = Number(input01.value) - Number(input02.value);
    //Resultado = result;

    Resultado.textContent = vlr1 - vlr2;

}

btSubtrair.onclick = function(){
    subtrair();
}