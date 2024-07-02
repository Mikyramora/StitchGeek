import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
 
async function crearImagen(evento){
    
    evento.preventDefault();

    const nombre= document.querySelector("[data-nombre]").value;
    const precio= document.querySelector("[data-precio]").value;
    const img= document.querySelector("[data-img]").value;

    await conexionAPI.enviarImagen(nombre, precio, img);
}

formulario.addEventListener("submit", evento=> crearImagen(evento));