let inputVendas = document.querySelector("#inputVendas");
let inputMeta = document.querySelector("#inputMeta");
let inputMinima = document.querySelector("#inputMinima");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculoMetas(){
    let vendas = Number(inputVendas.value);
    let meta = Number(inputMeta.value);
    let metaMinima = Number(inputMinima.value);

    let percentualMeta = (vendas / meta) * 100;
    let percentualMinima = (vendas / metaMinima) * 100;

    let h2resultado = " "
    if(vendas >= meta){
        h2resultado += "Atingiu a meta! <br>";
    }else if(vendas >= metaMinima){
        h2resultado += "Atingiu a meta mínima! <br>";
    }else{
        h2resultado += "Nao atingiu nenhuma meta. <br>";
    }

    h2resultado += "Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%<br>";
    h2resultado += "Percentual de atingimento da meta mínima: " + percentualMinima.toFixed(2) + "%";

    h2Resultado.innerHTML = h2resultado;
}

btCalcular.onclick = function(){
    calculoMetas();
}