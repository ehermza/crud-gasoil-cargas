const { Router } = require('express');
const mongo = require('mongoose');
const Carga = require("../models/Carga");
const Info = require("../models/Info");
const fs = require("fs");

const router = Router();

router.get('/file', function (req, res) {
    var arrayliters, arraykms = [];
    const INIT = 22;
    // fs.readFile('./public/kmsperweek.txt', 'utf8', function (err, data)
    function ver(litros, kilometr) {
        let litros_t = 0;
        // litros.forEach(function (valor) {
        for (var i = INIT; i < litros.length; i++) {
            litros_t += parseFloat(litros[i]);
        }
        init_k = kilometr[INIT - 1];
        console.log("Kms. since: " + init_k);
        const distancia = kilometr[kilometr.length - 1] - init_k;
        console.log(`La distancia es: ${distancia}`);
    }

    fs.readFile('./public/litersperweek.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        arrayliters = data.split(',');
        arrayliters.forEach(function (valor) {
            console.log(valor);
        });

    });
    fs.readFile('./public/kmsperweek.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        arraykms = data.split(',');
        ver(arrayliters, arraykms);
    });
});

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
    litros = 678.4  // Get from file: litersperweek.txt
    const fecha = new Date(2020, 06, 05);
    console.log(fecha);

    const info = new Info();
    info.liters = litros;

    let milseconds = new Date() - fecha;
    let aweek = 3600000 * 24 * 7;
    let weeks = parseInt(milseconds * 100 / aweek);
    info.weeks = weeks / 100;

    // const totalKms = 11000;
    info.kilometers = 11038;    // Get from file: kmsperweek.txt
    var lpw = litros / info.weeks;
    // const litersPerWeek = (Math.round(lpw * 100) / 100).toFixed(2);
    console.log(lpw);
    info.litersPerWeek = (Math.round(lpw * 100) / 100).toFixed(2);

    let kpl = info.kilometers / litros;
    info.kmsPerLiter = (Math.round(kpl * 100) / 100).toFixed(2);

    res.render('getinfo', { info: info });
});

module.exports = router;