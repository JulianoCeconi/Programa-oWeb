let inputNumero = document.querySelector("#inputNumero");
let inputNumero2 = document.querySelector("#inputNumero2");
let inputNumero3 = document.querySelector("#inputNumero3");
let btMedia = document.querySelector("#btMedia");
let btMediaPonderada = document.querySelector("#btMediaPonderada");
let btSomaMedia = document.querySelector("#endregionbtSomaMedia");
let btMediaMedia = document.querySelector("#btMediaMedia");
let Resultado1 = document.querySelector("#Resultado1");
let Resultado2 = document.querySelector("#Resultado2");
let Resultado3 = document.querySelector("#Resultado3");
let Resultado4 = document.querySelector("#Resultado4");

function media(){
    let vlr1 = Number(inputNumero.value);
    let vlr2 = Number(inputNumero2.value);
    let vlr3 = Number(inputNumero3.value);

    Resultado1.textContent = (vlr1 + vlr2 + vlr3) / 3;

}

btMedia.onclick = function(){
    media();
}

function mediaponderada(){
    let vlr1 = Number(inputNumero.value);
    let vlr2 = Number(inputNumero2.value);
    let vlr3 = Number(inputNumero3.value);

    Resultado2.textContent = (vlr1 * 3 + vlr2 * 2 + vlr3 * 5) / 10;
}

btMediaPonderada.onclick = function(){
    mediaponderada();
}

function Somamedia(){
    let SomadasMedias = Resultado1 + Resultado2;

    Resultado3.textContent = SomadasMedias;

}

btSomaMedia.onclick = function(){
    Somamedia();
}