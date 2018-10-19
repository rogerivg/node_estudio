// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Roger',
        id
    }

    if (id == 20) {
        callback(`El usuario con id ${id} no existe`)
    } else {
        callback(null, usuario);
    }
}


getUsuarioById(10, (err, usuario) => {
    if (err) {
        console.log('entro a error');
        return console.log(err);
    }
    console.log('Usuario de bd ', usuario);
});