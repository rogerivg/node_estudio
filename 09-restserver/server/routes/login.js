require('../config/config');
const express = require('express'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    Usuario = require('../models/usuario'),
    app = express();

app.post('/login', (req, res) => {
    let body = req.body;
    Usuario.findOne({ email: body.email }, (err, usuarioDb) => {
        //console.log("TIEMPOOOO ", process.env.CADUCIDAD_TOKEN);
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!usuarioDb) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrectos'
                }
            });
        }
        if (!bcrypt.compareSync(body.password, usuarioDb.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrectos'
                }
            });
        }
        let token = jwt.sign({
            usuario: usuarioDb
        }, process.env.SEED, { expiresIn: 60 * 60 })
        res.json({
            ok: true,
            usuario: usuarioDb,
            token
        })
    })
})

module.exports = app;