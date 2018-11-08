//verificar token
const jwt = require('jsonwebtoken');
let verificaToken = (req, res, next) => {
        let token = req.get('token');

        jwt.verify(token, process.env.SEED, (err, decoded) => {
            console.log(token);
            if (err) {
                return res.status(401).json({
                    ok: false,
                    err,
                    msg: 'Token no valido'
                })
            }
            req.usuario = decoded.usuario;
            console.log(token);
            next();
        })

        // res.json({
        //     token
        // })
    }
    //verifica rol admin
let verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role == 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                msg: 'El usuario no es administrador'
            }
        })
    }

}

module.exports = {
    verificaToken,
    verificaAdminRole
}