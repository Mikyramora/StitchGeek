async function listarImagenes(){
    const conexion = await fetch("http://localhost:3001/imagenes");
    
    const conexionConvertida= conexion.json();

    return conexionConvertida
}

async function enviarImagen(nombre, precio, img){
    const conexion = await fetch ("http://localhost:3001/imagenes", {
        method:"POST", 
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            img:img
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

// const eliminar = document.querySelector(".eliminar");

// async function eliminarCard(evento){

//     evento.preventDefault();

//     const conexion = await fetch ("http://localhost:3001/imagenes", {
//         method:"DELETE", 
//         headers:{"Content-type":"application/json"},
//         body:JSON.stringify({
//             id:id
//         })
//     })
//     const conexionConvertida = conexion.json();

//     return conexionConvertida;
// }

// eliminar.addEventListener("click", evento => eliminarCard(evento));

export const conexionAPI={
    listarImagenes, enviarImagen
}
//listarImagenes();