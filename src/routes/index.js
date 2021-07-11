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

router.get('/delete/:getid', async(req, res,next) => {
    const { getid } = req.params;
     const carga = await Carga.findByIdAndDelete(getid);
    console.log(`Delete object: /${getid}`);

    res.redirect('/');
});

router.get('/:getid', async(req, res,next) => {
    const { getid } = req.params;
    const carga = await Carga.findOne(getid);
    console.log(`Get object: /${getid}`);

    res.redirect('/');
});

module.exports = router;