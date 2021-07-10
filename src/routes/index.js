const { Router } = require("express");
const Carga = require("../models/Carga");

const router = Router();

router.get('/', async(req, res) => {
    const cargas = await Carga.find();
    res.render('index', { cargas:cargas });
});

router.post('/add', async (req, res) => {
    console.log("Adding to database...");

    const carga = new Carga(req.body);
    await carga.save();

    res.redirect('/');
});

router.get('/:getid', async(req, res,next) => {
    const { getid } = req.params;
    const carga = await Carga.findOne(getid);
    console.log(`/${getid}`);
    console.log('get Litros: ' + carga.liters);
    res.redirect('/');

});

module.exports = router;