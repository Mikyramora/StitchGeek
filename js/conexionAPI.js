async function listarImagenes(){
    const conexion = await fetch("http://localhost:3001/imagenes");
    
    const conexionConvertida= conexion.json();

    return conexionConvertida
}

async function crearImagen(){
    const conexion = await fetch ("http://localhost:3001/imagenes")
}

export const conexionAPI={
    listarImagenes
}
//listarImagenes();