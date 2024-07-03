async function listarImagenes(){
    const conexion = await fetch("https://my-json-server.typicode.com/Mikyramora/stitch-geek-api/db");
    
    const conexionConvertida= conexion.json();

    return conexionConvertida
}

async function enviarImagen(nombre, precio, img){
    const conexion = await fetch ("https://my-json-server.typicode.com/Mikyramora/stitch-geek-api/db", {
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
    const conexion = await fetch (`https://my-json-server.typicode.com/Mikyramora/stitch-geek-api/db/${id}`, {
        method:"DELETE" 
    });
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI={
    listarImagenes, enviarImagen, eliminarCard
}
