document.addEventListener("DOMContentLoaded", function() {
   // Função que será executada ao abrir o site
   reset();
});

function reset() {
   const divNenhuma = document.querySelector(".msg__saida__nenhuma");
   const divCopiar = document.querySelector(".msg__saida__copiar");

   // Exibe a figura e inibe o botão copiar
   divNenhuma.style.display = "block";
   divCopiar.style.display = "none";
   document.getElementById("msg-entrada").value = "";
}

function btn_cripto_decripto(botao) {
   const divNenhuma = document.querySelector(".msg__saida__nenhuma");
   const divCopiar = document.querySelector(".msg__saida__copiar");
   // Valor a ser criptogafado
   const textoEntrada = document.getElementById("msg-entrada").value;

   var msgEntrada = document.getElementById("msg-entrada").value;
   var textoConversao = "";

   if (!validarMsg(msgEntrada)) {
      reset();
      return;
   }

   // Inibe a figura e exibe o botão copiar
   divNenhuma.style.display = "none";
   divCopiar.style.display = "block";

   // Codifica/Decodifica a mensagem e exibe na saída
   if (botao.getAttribute("id") === "btn-cripto") {
      textoConversao = criptografarMsg(textoEntrada);
      console.log("1.Entrada:", textoEntrada);
      console.log("1.Conversão:",textoConversao);
   } else {
      textoConversao = descriptografarMsg(textoEntrada);
   }
   console.log("2.Entrada:", textoEntrada);
   console.log("2.Converção:", textoConversao);
   document.getElementById("msg-saida-copiar-texto").textContent = textoConversao;

}

function validarMsg(texto) {
   // Expressão regular para verificar apenas letras minúsculas sem acentos ou caracteres especiais
   const regex = /^[a-z\s]*$/;

   if (texto === "" || !(regex.test(texto)) ) {
      alert("Atenção! Apenas letras minúsculas, espaços e sem acentuações.");
      return false;
   }
   return true;
}

function criptografarMsg(texto) {
    // Substituições das letras conforme solicitado
    var textoCodificado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    return textoCodificado;
}

function descriptografarMsg(texto) {
    var textoDecodificado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDecodificado;
}

function copiarMsg() {
    const pElement = document.getElementById("msg-saida-copiar-texto");
    const texto = pElement.textContent || pElement.innerText;

    // Usa a API Clipboard para copiar o texto para o clipboard
    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log("Texto copiado para o clipboard!");
        })
        .catch(err => {
            console.error("Erro ao copiar o texto: ", err);
        });
}

