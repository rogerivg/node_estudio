//require
//const multiplicar = require('./multiplicar/multiplicar')

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'),
    argv = require('./config/yargs').argv,
    colors = require('colors');
let comando = argv._[0];

console.log(argv.base);
console.log(argv.limite);

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.red, `${argv.base} hasta ${argv.limite}`.rainbow))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

//let argv = process.argv.base;






// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);


// //console.log(multiplicar)

// // multiplicar.crearArchivo(base)
// //     .then(archivo => console.log(`Archivo creado: ${archivo}`))

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e))