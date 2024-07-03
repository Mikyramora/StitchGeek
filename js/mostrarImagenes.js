import { conexionAPI } from "./conexionAPI.js";


const lista = document.querySelector("[data-lista]")

function crearCard(id,nombre, precio, img){
    const imagen = document.createElement("li");
    imagen.className= "card__item";
    imagen.innerHTML=`
                        <img class="card_img" src="${img}">
                        <div class="descripcion-card">
                            <h3>${nombre}</h3>
                            <p>${precio}</p>
                            <img class="eliminar_bote" src="./img/icon _trash.png" alt="logo bote de basura" data-id="${id}">
                        </div>`;

    const eliminar = imagen.querySelector(".eliminar_bote");
    eliminar.addEventListener("click", async () => {
        const idImagen = eliminar.getAttribute("data-id");
        try {
            await conexionAPI.eliminarCard(idImagen);
            imagen.remove();
        } catch (error){
            console.error("Ha ocurrido un problema, intenta de nuevo más tarde", error);
        }
});

    return imagen;
}




async function listarImagenes(){
    const listaAPI= await conexionAPI.listarImagenes();

    if (listaAPI.length === 0){
        const vacio = document.createElement("p");
        vacio.textContent = "No se han agregado productos";
        vacio.className= "agregar_vacio";
        lista.appendChild(vacio);
    } else {

    listaAPI.forEach(imagen=>lista.appendChild(crearCard(imagen.id, imagen.nombre, imagen.precio, imagen.img)))
    }
}

listarImagenes()