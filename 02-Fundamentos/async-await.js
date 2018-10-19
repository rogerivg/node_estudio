let getNombre = async() => {
    //throw new Error('No existe usuario de base de datos');
    return 'Roger';
}

let getNombres = () => {
    return new Promise((resolve, reject) => {
        resolve('RogerG');
    })
}

let gettNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Roger Gonzalez');
        }, 3000);

    })
}

let saludo = async() => {
    let nombre = await gettNombre();
    return `Hola ${nombre}`
}


saludo().then(mensaje => {
    console.log(mensaje);
}).catch(e => {
    console.log('Se presento error ::', e);
})