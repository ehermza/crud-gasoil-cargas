const { Router } = require("express");
const Carga = require("../models/Carga");
const { weekNumber } = require('weeknumber');

const router = Router();

router.get('/week', function () {
    // const hoy = new Date(2016, 0, 3, 12);//
    const hoy = new Date();
    const week = weekNumber(hoy);
    console.log(`today is: ${hoy}`);
    console.log('Week of year: ' + week); // Sun
});

router.get('/', async (req, res) => {
    const cargas = await Carga.find();
    res.render('index', { cargas: cargas });
});

router.post('/add', async (req, res) => {
    console.log("Adding to database...");

    const carga = new Carga(req.body);
    await carga.save();

    res.redirect('/');
});

router.get('/delete/:getid', async (req, res, next) => {
    const { getid } = req.params;
    const carga = await Carga.findByIdAndDelete(getid);
    console.log(`Delete object: /${getid}`);

    res.redirect('/');
});

router.get('/:getid', async (req, res, next) => {
    const { getid } = req.params;
    const carga = await Carga.findOne(getid);
    console.log(`Get object: /${getid}`);

    res.redirect('/');
});

module.exports = router;