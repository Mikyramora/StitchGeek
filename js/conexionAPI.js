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

async function eliminarCard(id){
    const conexion = await fetch (`http://localhost:3001/imagenes/${id}`, {
        method:"DELETE" 
    });
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI={
    listarImagenes, enviarImagen, eliminarCard
}
