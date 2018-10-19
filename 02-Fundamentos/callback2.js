let empleados = [{
        id: 1,
        nombre: 'Roger'
    },
    {
        id: 2,
        nombre: 'Pruebaa',
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.id == id;
    })
    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}

let getEmpleadoByNombre = (nombre, callback) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.nombre == nombre;
    })
    if (!empleadoDB) {
        callback(`No existe un empleado con el Nombre ${nombre}`)
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (nombre, callback) => {
    // console.log(nombre);
    getEmpleadoByNombre(nombre, (err, empleado) => {
        if (err) {
            return err;
        } else {
            let salarioDB = salarios.find(salario => {
                return salario.id == empleado.id;
            });
            if (!salarioDB) {
                callback(`No existe salario para empleado ${empleado.nombre}`)
            } else {
                callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
            }
        }
    });
}

// getEmpleado(1, (err, empleado) => {
//     if (err) {
//         return err;
//     } else {
//         console.log(empleado);
//     }
// });

getSalario('Juan', (err, empleado) => {
    if (err) {
        console.log(err);
    } else {
        console.log(empleado);
    }
});