let empleados = [{
        id: 1,
        nombre: 'Roger'
    },
    {
        id: 2,
        nombre: 'Pruebaa'
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

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => {
            return empleado.id == id;
        })
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    })
}

let getEmpleadoByNombre = (nombre) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => {
            return empleado.nombre == nombre;
        })
        if (!empleadoDB) {
            reject(`No existe un empleado con el Nombre ${nombre}`);
        } else {
            resolve(empleadoDB);
        }
    })
}

let getSalario = (nombre, callback) => {
    return new Promise((resolve, reject) => {
        getEmpleadoByNombre(nombre).then(empleado => {
            let salarioDB = salarios.find(salario => {
                return salario.id == empleado.id;
            });
            if (!salarioDB) {
                reject(`No existe salario para empleado ${empleado.nombre}`);
            } else {
                resolve({ nombre: empleado.nombre, salario: salarioDB.salario })
            }
        }, err => {
            reject(err);
        });
    })
}


// getEmpleado(10).then(empleado => {
//     console.log('Empleado de DB::: ', empleado);
// }, err => {
//     console.log(err);
// });
getSalario('Pruebaa').then(empleado => {
    console.log('Empleado de DB::: ', empleado);
}, err => {
    console.log(err);
});