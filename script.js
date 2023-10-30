var texto = document.getElementById('inputText');
const teclas = document.querySelectorAll(".tecla");
const salvar = document.getElementById('salvar');
const limpar = document.getElementById('limpar');

teclas.forEach(function(botao){
  botao.addEventListener('click', function(){
    var letra = botao.innerHTML;
    inputText.value += letra;    
  });
});

limpar.addEventListener('click', limpa);

function limpa(){
  texto.value = "";
}

salvar.addEventListener('click', function(){
  var palavra = inputText.value;
  limpa();
  console.log("Palavra salva: " + palavra);
});
