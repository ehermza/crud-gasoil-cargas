const { Router } = require('express');
const mongo = require('mongoose');
const Carga = require("../models/Carga");
const Info = require("../models/Info");

const router = Router();

router.get('/info', async function (req, res) {
    console.log('SUMAR!');

    let litros = 0;
    const listCargas = await Carga.find();

/*     
        listCargas.forEach(function (carga) {
        console.log(carga.liters);
        litros += carga.liters;
    });
 */
     litros = 678.4  // Delete!
    const fecha = new Date(2020, 06, 05);
    console.log(fecha);

    const info = new Info();
    info.liters = litros;

    let milseconds = new Date() - fecha;
    let aweek = 3600000 * 24 * 7;
    let weeks = parseInt(milseconds *100/ aweek);
    info.weeks = weeks/100;

    // const totalKms = 11000;
    info.kilometers = 11038;    // Cambiar!
    var lpw = litros / info.weeks;
    // const litersPerWeek = (Math.round(lpw * 100) / 100).toFixed(2);
    console.log(lpw);
    info.litersPerWeek = (Math.round(lpw * 100) / 100).toFixed(2);

    let kpl = info.kilometers / litros;
    info.kmsPerLiter =  (Math.round(kpl * 100) / 100).toFixed(2);

    res.render('getinfo', { info: info });
});

module.exports = router;