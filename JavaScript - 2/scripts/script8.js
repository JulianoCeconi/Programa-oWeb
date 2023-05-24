let inputNumero = document.querySelector("#inputNumero");
let btResultado = document.querySelector("#btResultado")

function parouImpar(){
    let vlr1 = Number(inputNumero.value);

    if(vlr1 % 2 === 0){
        alert('O numero é Par');
    }else{
        alert('O numero é Impar');
    }
}

btResultado.onclick = function(){
    parouImpar();
}