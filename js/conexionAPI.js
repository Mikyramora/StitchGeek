async function listarImagenes(){
    const conexion = await fetch("http://localhost:3001/imagenes");
    
    const conexionConvertida= conexion.json();

    return conexionConvertida
    //console.log(conexionConvertida);
}

export const conexionAPI={
    listarImagenes
}
//listarImagenes();