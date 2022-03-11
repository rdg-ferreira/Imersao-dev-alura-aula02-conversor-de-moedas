function txt(texto) {
  console.log(texto);

  // Pega Valor do H3
  var txt_tela = (document.getElementById("resultado").innerHTML = texto);
}

function moedas(nome_moeda, valor_moeda) {
  var valor = document.getElementById("valor").value;
  var nome = document.getElementById("moeda").value;

  // Faz a verificação
  if (nome == nome_moeda) {
    valor = valor * valor_moeda;
    // Mostra o Resultado
    txt("Resultado: " + parseFloat(valor));
  }
}
function Converter() {
  // Passa o nome da moeda para a verificação e o valor atual da moeda como parâmentro
  moedas("dolar", 5.5);
  moedas("euro", 5.54);
  moedas("bit", 197020.05);
}
