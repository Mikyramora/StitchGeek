async function listarImagenes(){
    const conexion = await fetch("http://localhost:3001/imagenes");
    
    const conexionConvertida= conexion.json();

    return conexionConvertida
}

async function enviarImagen(nombre, precio, url){
    const conexion = await fetch ("http://localhost:3001/imagenes", {
        method:"POST", 
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            url:url
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI={
    listarImagenes, enviarImagen
}
//listarImagenes();