import { conexionAPI } from "./conexionAPI.js";


const lista = document.querySelector("[data-lista]")

function crearCard(nombre, precio, img){
    const imagen = document.createElement("li");
    imagen.className= "card__item";
    imagen.innerHTML=`
                        <img class="card_img" src="${img}" alt="chocobo">
                        <div class="descripcion-card">
                            <h3>${nombre}</h3>
                            <p>${precio}</p>
                            <img src="./img/icon _trash.png" alt="logo bote de basura">
                        </div>`;

    return imagen;
}

async function listarImagenes(){
    const listaAPI= await conexionAPI.listarImagenes()

    listaAPI.forEach(imagen=>lista.appendChild(crearCard(imagen.nombre, imagen.precio, imagen.img)))
}

listarImagenes()