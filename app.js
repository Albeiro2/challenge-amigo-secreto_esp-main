// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Codigo realizado por Albeiro Baena estudiante de Alura.
let amigoSecreto;
let listaAmigos = [];



//Al momento de intentar anadir un amigo, verificamos el estado de la caja
function anadirAmigo(){
    if(document.getElementById("amigo").value ==""){
    let aviso = "Asegurese de escribir el nombre de su amigo!";
    mostrarAviso(aviso);       
    }else{
        listarAmigos();
        console.log(listaAmigos);
    }
}  

//Creamos el aviso de la caja vacia
function mostrarAviso(aviso1) {
    // Crear el div del aviso
    let aviso = document.createElement("div");
    aviso.innerText = aviso1;
    
    // Estilos del aviso
    aviso.style.position = "fixed";
    aviso.style.top = "0";
    aviso.style.left = "0";
    aviso.style.width = "100%";
    aviso.style.backgroundColor = "#ffcc00";
    aviso.style.color = "black";
    aviso.style.textAlign = "center";
    aviso.style.padding = "10px";
    aviso.style.fontSize = "18px";
    aviso.style.fontWeight = "bold";
    
    // Agregar el aviso al cuerpo del documento
    document.body.appendChild(aviso);
    
    // Ocultar el aviso después de 3 segundos
    setTimeout(() => {
        aviso.remove();
    }, 3000);
}

//Agregamos amigos a la lista
function listarAmigos(){
    listaAmigos.push(document.getElementById("amigo").value);
    agregarNombrePantalla();
    
}

//Mostramos en pantalla los amigos agregados
function agregarNombrePantalla() {

    let lista = document.getElementById("listaAmigos");
    let nombre = document.getElementById("amigo").value.trim();

    let nuevoElemento = document.createElement("li"); // Crear un <li>
    nuevoElemento.innerText = nombre; // Agregar el texto al <li>
    lista.appendChild(nuevoElemento); // Agregar el <li> a la lista <ul>

    document.getElementById("amigo").value = ""; // Limpiar el input
}

//Antes de sortear tambien verificamos que hayan amigos o mas de uno para realizar el sorteo
function sortearAmigo(){
    let lista = document.getElementById("listaAmigos");
    if(lista.childElementCount == 0){
        let aviso ="No tienes amigos para sortear!";
        mostrarAviso(aviso);
    }else if(lista.childElementCount == 1){
        let aviso ="Digite mas de 1 amigo para sortear!";
        mostrarAviso(aviso);
    }
    
    else{
       mostrarResultado();
    }
}

//Mostramos el amigo sorteado por medio de un indice al azar
function mostrarResultado(){
    let indiceAmigo = Math.floor(Math.random() * listaAmigos.length);
    amigoSecreto = listaAmigos[indiceAmigo];
    let resultado = document.getElementById("resultado");
    let elementoSorteado = document.createElement("li"); // Crear un <li>
    elementoSorteado.innerText = "El amigo secreto sorteado es: "+amigoSecreto;
    resultado.appendChild(elementoSorteado);
}
