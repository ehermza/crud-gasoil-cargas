const { Router } = require("express");
const Carga = require("../models/Carga");
const { weekNumber } = require('weeknumber');

const router = Router();

router.get('/week', function () 
{
    const hoy = new Date();
    const week = weekNumber(hoy);
    console.log(`today is: ${hoy}`);
    console.log('Week of year: ' + week); // Sun
});

router.get('/', async function (req, res) 
{
    const cargas = await Carga.find();
    res.render('index', { cargas: cargas });
});

router.post('/add', async function (req, res) 
{
    console.log("Adding to database...");
    
    const carga = new Carga(req.body);
    const byliter = req.body.price/req.body.liters;
    carga.price_byliter = (Math.round(byliter * 100) / 100).toFixed(2);
    // carga.weekofyear = weekNumber(new Date());
    console.log(carga);
    await carga.save();

    res.redirect('/');
});

router.get('/delete/:getid', async (req, res, next) => {
    const { getid } = req.params;
    const carga = await Carga.findByIdAndDelete(getid);
    console.log(`Delete object: /${getid}`);

    res.redirect('/');
});

router.get('/charge/:getid', async (req, res, next) => {
    const { getid } = req.params;
    const carga = await Carga.findOne(getid);
    console.log(`Get object: /${getid}`);

    res.redirect('/');
});

module.exports = router;