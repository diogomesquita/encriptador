const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const btnCopiar = document.querySelector(".copiar");

function criptografar(valor) {
   valor = valor.replace("e", "enter");
   valor = valor.replace("i", "imes");
   valor = valor.replace("a", "ai");
   valor = valor.replace("o", "ober");
   valor = valor.replace("u", "ufat");
   return valor;
}

function descriptografar(valor) {
    valor = valor.replace("enter", "e");
    valor = valor.replace("imes", "i");
    valor = valor.replace("ai", "a");
    valor = valor.replace("ober", "o");
    valor = valor.replace("ufat", "u");
    return valor;
 }

btnEncriptar.addEventListener('click', e => {
    const entrada = document.querySelector("#entrada").value;
    const saida = document.querySelector("#saida");
    
    saida.innerHTML = criptografar(entrada);
});

btnDesencriptar.addEventListener('click', (e) => {
    const entrada = document.querySelector("#entrada").value;
    const saida = document.querySelector("#saida");
    
    saida.innerHTML = descriptografar(entrada);
});

btnCopiar.addEventListener('click', (e) => {
    const saida = document.querySelector("#saida").value;
    navigator.clipboard.writeText(saida);
});