//======================
//Puerto
//======================

process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb://cafe-user:abc123456@ds255253.mlab.com:55253/cafe_db';
}

//Vencimiento del token
process.env.CADUCIDAD_TOKEN = 3600;

//SEED el primero es para local linea comentada y la segunda es ej de como se usa en heroku con variables de entorno
//process.env.SEED = 'este-es-el-seed-desarrollo';
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

process.env.URLDB = urlDB;