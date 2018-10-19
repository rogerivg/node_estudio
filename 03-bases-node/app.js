const fs = require('fs');

let base = 5;
let data;

for (let i = 0; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) {
        throw new Error(err);
    } else {
        console.log('Se creo el archivo');
    }
});