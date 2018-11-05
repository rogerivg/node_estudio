const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado = {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    },
    argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea del listado por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}