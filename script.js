const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btnencriptar(){
     const textoEncriptado = encriptar(inputTexto.value);
     mensaje.value = textoEncriptado;
}

function encriptar(StringParaEncriptar){
    let matrizCodigo  = [["e","enter"],["i","imes"],["a","ai"],
    ["o","ober"],["u","ufat"]]

    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
         if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1])

         }

    }
     return StringParaEncriptar;
}


const DesencriptadorDeTexto = document.querySelector(".input-text");
const mens = document.querySelector(".input-text-area");


function btndesencriptar(){
    const textoDesencriptado = desencriptar(DesencriptadorDeTexto.value);
    mens.value = textoDesencriptado;
}

function desencriptar(StringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],
    ["ober","o"],["ufat","u"]]


StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
for(let i=0; i< matrizCodigo.length; i++){
    if(StringParaDesencriptar.includes(matrizCodigo[i][0])){
        StringParaEncriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][0],
         matrizCodigo [i][1])
    }
    return StringParaDesencriptar;
}
 
}




function copiar(){
    let copiarText = document.querySelector("#entrega");
    copiarText.select();
    document.execCommand("copy");
    alert("Texto copiado");
}
document.querySelector("#copy");



