const { Router } = require('express');
const mongo = require('mongoose');
const Carga = require("../models/Carga");


const router = Router();

router.get('/sumar', async function (req, res) {
    console.log('SUMAR!');

    let litros = 0;
    const listCargas = await Carga.find();

    listCargas.forEach(function (carga) {
        console.log(carga.liters);
        litros += carga.liters;
    });
    console.log();
    res.send(`total liters registred: ${litros}`);
});

module.exports = router;