const argv = require('./config/yargs').argv,
    porHacer = require('./por-hacer/por-hacer'),
    colors = require('colors');

//console.log(argv);


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('======================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================='.green);
        }
        break;
    case 'actualizar':
        let acrtualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(acrtualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
}