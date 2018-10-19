function saludar(nombre) {
    let mensaje = `Hola ${ nombre }`;
    return mensaje;
}

let saludo = saludar('Roger');

console.log(saludo);