let nombre = 'prueba';
let real = 'Roger Gonzalez';

console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;
console.log(nombreCompleto == nombreTemplate);