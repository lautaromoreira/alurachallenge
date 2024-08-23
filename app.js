
const mensajeOriginal  = document.querySelector(".challenge__original__textosuperior") ;
const mensajeEncriptado = document.querySelector(".challenge__encriptado__box__seccion2__textoencriptado");
const botoncopiar = document.querySelector(".challenge__encriptado__box__seccion2__botoncopiar");
const seccion1 = document.querySelector("#seccion1");
const seccion2 = document.querySelector("#seccion2");
const aEncript = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]] ;


function encripta(textoAbierto){
    textoAbierto = textoAbierto.toLowerCase() ;
    
    for( let n = 0 ; n < aEncript.length ; n++) {
       if( textoAbierto.includes(aEncript[n][0]) ) {
            textoAbierto = textoAbierto.replaceAll(aEncript[n][0],aEncript[n][1]);
       }
    }
    return textoAbierto
}
function btnencriptar(){
    const textoEncriptado = encripta(mensajeOriginal.value);
    if(mensajeOriginal.value.length >= 1){
       mensajeEncriptado.value = textoEncriptado ;
       seccion1.style.display ='none';
       seccion2.style.display = 'inline-block'
    } 
    else {
        seccion1.style.display ='inline-block';
        seccion2.style.display = 'none'
    
    }
}

function desencripta(textoEncriptado) {
 
  for( let n = 0 ; n < aEncript.length ; n++ ) {
     if( textoEncriptado.includes(aEncript[n][1])){
         textoEncriptado = textoEncriptado.replaceAll(aEncript[n][1],aEncript[n][0]);
     }  
  }
return textoEncriptado 
}

function btndesencriptar(){
    const textoLibre = desencripta(mensajeOriginal.value);
    if(mensajeOriginal.value.length >= 1 ) {
       mensajeEncriptado.value = textoLibre;
       seccion1.style.display ='none';
       seccion2.style.display = 'inline-block' ;
    } 
    else {
        seccion1.style.display ='inline-block';
        seccion2.style.display = 'none' ;
 
    }
}

function btncopiar(){
    mensajeOriginal.value = mensajeEncriptado.value;
    seccion1.style.display ='inline-block';
    seccion2.style.display ='none';
    /* copia al portapapeles por si alquien quiere */
    navigator.clipboard.writeText(mensajeEncriptado.value);
    mensajeEncriptado.value = '';
}

