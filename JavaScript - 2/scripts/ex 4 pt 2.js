function calcularTotal() {
    let sabores = [];
    let checkboxes = document.getElementsByName('sabor');
  
    // Itera sobre os checkboxes para verificar quais sabores foram selecionados
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        sabores.push(checkboxes[i].value);
      }
    }
  
    let numRefri = parseInt(document.getElementById('num-refri').value);
    let valorPizza = 57.00;
    let valorRefri = 7.00;
  
    let totalPizza = valorPizza * sabores.length;
    let totalRefri = valorRefri * numRefri;
    let totalPagar = totalPizza + totalRefri;
  
    // Exibe os sabores selecionados e o valor total a pagar
    document.getElementById('sabores-escolhidos').innerHTML = sabores.join(', ');
    document.getElementById('valor-total').innerHTML = 'R$ ' + totalPagar.toFixed(2);
  }
  