let inputNumero = document.querySelector("#inputNumero");
let inputNumero2 = document.querySelector("#inputNumero2");
let btReajuste = document.querySelector("#btReajuste");
let Resultado = document.querySelector("#Resultado");

function porcentagem(){
    let vlr1 = Number(inputNumero.value);
    

    //let result = Number(input01.value) - Number(input02.value);
    //Resultado = result;

    Resultado.textContent = (vlr1+(25/100));

}

btReajuste.onclick = function(){
    porcentagem();
}