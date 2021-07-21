
const { Schema, model } = require('mongoose');
var dateFormat = require("dateformat");

const infoSchema = new Schema({
    // const totalWeeks = Date.now() - fecha;
    // const totalKms = 11000;
    // const lpw = totalLiters/totalWeeks;
    // const litersPerWeek = (Math.round(lpw * 100) / 100).toFixed(2);
    // const consumo = totalKms/totalLiters;
    liters: Number,
    weeks : Number,
    kilometres: Number,
    litersPerWeek: Number,
    kmsPerLiter: Number
})

module.exports = model('info', infoSchema);