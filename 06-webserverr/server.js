const express = require('express'),
    app = express(),
    hbs = require('hbs'),
    port = process.env.PORT || 3000;
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

//Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');





app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Roger'
    });
})

app.get('/about', function(req, res) {
    res.render('about');
})

// app.get('/', function(req, res) {
//     //res.send('Hola mundo')
//     let salida = {
//         nombre: 'Roger',
//         url: req.url
//     }
//     res.send(salida);
// })

//app.listen(3000);
app.listen(port, () => {
    console.log(`Escuchando peticiones por el puerto ${port}`);
})