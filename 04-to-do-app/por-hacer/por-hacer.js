const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar');
        }
    })
}

const crear = (descripcion) => {
        cargarDB();
        let porHacer = {
            descripcion: descripcion,
            completado: false
        }
        listadoPorHacer.push(porHacer);
        guardarDB();
        return porHacer;
    },
    cargarDB = () => {
        try {
            listadoPorHacer = require('../db/data.json');
        } catch (error) {
            listadoPorHacer = [];
        }

        //console.log(listadoPorHacer);
    },
    getListado = () => {
        cargarDB();
        return listadoPorHacer;
    },
    actualizar = (descripcion, completado) => {
        cargarDB();
        let index = listadoPorHacer.findIndex(tarea => {
            return tarea.descripcion === descripcion;
        })

        if (index >= 0) {
            listadoPorHacer[index].completado = completado;
            guardarDB();
            return true;
        } else {
            return false
        }
    },
    borrar = (descripcion) => {
        cargarDB();
        let index = listadoPorHacer.findIndex(tarea => {
            return tarea.descripcion === descripcion;
        })
        if (index >= 0) {
            listadoPorHacer.splice(index, 1);
            guardarDB();
            return true;
        } else {
            return false
        }
    }

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}