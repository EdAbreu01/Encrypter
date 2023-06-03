const textArea = document.querySelector(".textarea1")
const mensaje = document.querySelector(".textarea2")


function btnEncriptar(){
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
}




function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


