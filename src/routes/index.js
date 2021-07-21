const { Router } = require("express");
const Carga = require("../models/Carga");
const { weekNumber } = require('weeknumber');
// 
const randomstring = require('randomstring');

const router = Router();

router.get('/week', function () {
    const hoy = new Date();
    const week = weekNumber(hoy);
    console.log(`today is: ${hoy}`);
    console.log('Week of year: ' + week); // Sun
});

router.get('/', async function (req, res) {
    const cargas = await Carga.find();
    var mensaje = "";
    switch (req.query.status) {
        case 'not_liters':
            mensaje = 'Error: valor de LITROS inválido.\n Try again!';
            break;
        case 'deleted':
            mensaje = 'El registro se ha borrado con éxito!';
            break;
    }
    console.log(mensaje);
    res.render('index', { cargas: cargas, status: mensaje });
});

router.post('/add', async function (req, res) {
    console.log("Adding to database...");

    const carga = new Carga(req.body);
    const litros = req.body.liters;
    if (litros < 1) {
        res.redirect('/?status=not_liters');
        // ('/', {info: "the liters value is incorrect. Please, try again."});
        return;
    }
    const byliter = req.body.price / litros
    carga.price_byliter = (Math.round(byliter * 100) / 100).toFixed(2);
    if (carga.n_ticket.trim() == "") {
        carga.n_ticket = randomstring.generate(7);
    }
    carga.weekofyear = weekNumber(carga.date_charge);
    console.log(carga);

    await carga.save();

    res.redirect('/');
});

router.get('/delete/:getid', async (req, res, next) => {
    const { getid } = req.params;
    const carga = await Carga.findByIdAndDelete(getid);
    console.log(`Delete object: /${getid}`);

    res.redirect('/?status=deleted');
});

router.get('/charge/:getid', async (req, res, next) => {
    const { getid } = req.params;
    const carga = await Carga.findOne(getid);
    console.log(`Get object: /${getid}`);

    res.redirect('/');
});

module.exports = router;