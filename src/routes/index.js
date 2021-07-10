const { Router } = require("express");
const Carga = require("../models/Carga");

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/add', async (req, res) => {
    // console.log("Adding to database...");
    const title = req.body.to;
    console.log(`Description: ${title}`);

    const carga = new Carga(req.body);
    await carga.save();

    res.redirect('/');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const carga = Carga.findOne(id);
    console.log('id: ' + carga);
});

module.exports = router;