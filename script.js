//  Exercício 06
function updatePiece() {
  let cboPieces = document.querySelector('#cboPieces');
  let piece = cboPieces.options[cboPieces.selectedIndex].value;
  let validMoves = '';

  switch (piece) {
    case 'Peões':
      validMoves = 'Se movimenta uma casa para frente, caso seja o primeiro movimento, pode se mover duas casas, seu ataque deve ser feito na diagonal.';
      break;
    case 'Torres':
      validMoves = 'Se movimenta na vertical ou horizontal, sem restrição de quantidade de casas.';
    break;
    case 'Cavalos':
      validMoves = 'Se movimenta duas casas nas vertical ou horizontal, e uma casa no sentido perpendicular àquele.';
      break;
    case 'Bispos':
      validMoves = 'Se movimenta no sentido diagonal, sem restrição de quantidade de casas.';
    break;
    case 'Rainha':
      validMoves = 'Se movimenta de forma livre, sem restrição de direção ou quantidade de casas.';
      break;
    case 'Rei':
      validMoves = 'Se movimenta uma casa em qualquer direção.';
    break;
  }

  let outText = document.querySelector('#outText');
  outText.textContent = validMoves;
};

//  Exercício 11
function salarioLiquido(salario) {
  let inSalary = document.querySelector('#inSalary');
  let outNetSalary = document.querySelector('#outNetSalary');

  salario = Number(inSalary.value);
  let inss = 0;
  let salarioDeduzidoInss = 0;
  let ir = 0;

  if (salario <= 1556.94) {
    inss = salario * 0.08;
  }else if (salario > 1556.94 && salario <= 2594.92) {
    inss = salario * 0.09;
  }else if (salario > 2594.92 && salario <= 5189.82) {
    inss = salario * 0.11;
  }else {
    inss = 570.88
  }

  salarioDeduzidoInss = salario - inss;

  if (salarioDeduzidoInss <= 1903.98) {
    ir = 0;
  }else if (salarioDeduzidoInss > 1903.98 && salarioDeduzidoInss <= 2826.65) {
    ir = (salarioDeduzidoInss * 0.075) - 142.80;
  }else if (salarioDeduzidoInss > 2826.65 && salarioDeduzidoInss <= 3751.05) {
    ir = (salarioDeduzidoInss * 0.15) - 354.80;
  }else if (salarioDeduzidoInss > 3751.05 && salarioDeduzidoInss <= 4664.68) {
    ir = (salarioDeduzidoInss * 0.225) - 636.13;
  }else {
    ir = (salarioDeduzidoInss * 0.275) - 869.36;
  }

  outNetSalary.textContent = `Após as deduções o salário será de R$ ${(salarioDeduzidoInss - ir).toFixed(2)}`;
}
let btnCalcNetSalary = document.querySelector('#btnCalcNetSalary');
btnCalcNetSalary.addEventListener('click', salarioLiquido);

let btnCleanSalary = document.querySelector('#btnCleanSalary');
btnCleanSalary.addEventListener('click', () => {
  inSalary.value = '';
  outNetSalary = document.querySelector('#outNetSalary').textContent = '';
})

//  Exercício 10
function profit() {
  let inCost = document.querySelector('#inCost');
  let inSalePrice = document.querySelector('#inSalePrice');
  let inSoldAmount = document.querySelector('#inSoldAmount');
  let outProfit = document.querySelector('#outProfit');

  let tax = 0.20;
  let cost = Number(inCost.value) + (Number(inCost.value) * tax);
  let salePrice = Number(inSalePrice.value);
  let soldAmount = Number(inSoldAmount.value);
  let result = (salePrice - cost) * soldAmount;

  outProfit.textContent = `O lucro será de R$ ${result.toFixed(2)}`;
}

function cleanFields() {
  let inCost = document.querySelector('#inCost');
  let inSalePrice = document.querySelector('#inSalePrice');
  let inSoldAmount = document.querySelector('#inSoldAmount');
  let outProfit = document.querySelector('#outProfit');

  inCost.value = '';
  inSalePrice.value = '';
  inSoldAmount.value = '';
  outProfit.textContent = '';
}

let btnCalc = document.querySelector('#btnCalc');
btnCalc.addEventListener('click', profit);

let btnClean = document.querySelector('#btnClean');
btnClean.addEventListener('click', cleanFields);
