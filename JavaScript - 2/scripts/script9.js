let inputNumero1 = document.querySelector("#inputNumero1");
let inputNumero2 = document.querySelector("#inputNumero2");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularTurmas(){
    let vlr1 = Number(inputNumero1.value);
    let vlr2 = Number(inputNumero2.value);

    let comTurma = Math.floor(vlr1 / vlr2);
    let semTurma = vlr1 % vlr2;

    h2Resultado.innerHTML = "Pessoas com Turma: "+comTurma + "<br>"+
                            "Pessoas sem Turma: "+semTurma + "<br>";

}

btCalcular.onclick = function(){
    calcularTurmas();
}