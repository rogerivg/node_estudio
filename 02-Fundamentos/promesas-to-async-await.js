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

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.id == id;
    })
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
}

let getEmpleadoByNombre = async(nombre) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.nombre == nombre;
    })
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el Nombre ${nombre}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async(nombre) => {
    let empleado = await getEmpleadoByNombre(nombre);
    let salarioDB = salarios.find(salario => {
        return salario.id == empleado.id;
    });
    if (!salarioDB) {
        throw new Error(`No existe salario para empleado ${empleado.nombre}`);
    } else {
        return ({ nombre: empleado.nombre, salario: salarioDB.salario })
    }
}


getSalario('Roger').then(empleado => {
    console.log('Empleado de DB::: ', empleado);
}).catch(e => {
    console.log('Se presento error ::', e);
})