const botaoCurtuir = document.getElementById("botao-curtir");
const botaoZerar = document.getElementById("botao-zerar");
const botaoCurtidas = document.getElementById("curtidas");
const botaoMensagem = document.getElementById("mensagem");

let curtidas = 0;

function atualizarTela() {
  textoCurtidas.textContent = curtidas;
  if (curtidas >= 10) {
    textoMensagem.textContent = "  Seu post viralizou!";
  } else {
    textoMensagem.textContent ="";
  }  
}

botaoCurtuir.addEventListener("click", function () {
    curtidas = curtidas + 1;
    atualizarTela();
});

botaoZerar.addEventListener("click", function () {
    curtidas = 0;
    atualizarTela();
});



