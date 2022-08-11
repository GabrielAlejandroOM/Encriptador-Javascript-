function encriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
    }


    
var boton1 = document.querySelector("#Boton_encriptar"); 
boton1.onclick = encriptar;

function desencriptar (){ var texto = document.querySelector("#input-texto").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".text-input-salida").value = textoCifrado; document.querySelector("#input-texto").value;

}

var boton2 = document.querySelector("#Boton_desencriptar"); 
boton2.onclick = desencriptar;




var areaTexto = document.querySelector(".text-input-salida");
areaTexto.addEventListener("focus", function borrado(){
    areaTexto.value = "";
});


function borrar(){
    var borrado = document.querySelector(".text-input-salida");
    var borrado2= document.querySelector("#input-texto");
    borrado.select();
    borrado.setSelectionRange(0,99999);
    document.execCommand("delete");
}

 var boton_borrar = document.querySelector("#borrar");

 boton_borrar.onclick = borrar;


function Copiar_de_textarea(){
    var copiar = document.querySelector(".text-input-salida");
    document.text_input_salida.select()
    window.clipboardData.setData("Text", copiar.value);
}

var copiado_boton = document.querySelector("#Copiar_info")


copiado_boton.onclick = Copiar_de_textarea;
    








