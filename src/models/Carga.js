const { Schema, model } = require('mongoose');
var dateFormat = require("dateformat");
const { weekNumber } = require('weeknumber');


const cargaSchema = new Schema({
    to: { type: String, default: '@CONSUMIDOR FINAL' },
    liters: { type: Number, require: true },
    price: { type: Number },
    price_byliter: {type: Number},
    weekofyear: { type: Number, default: weekNumber(new Date()) },
    n_ticket: { type: String, default: '00000000' },
    product: { type: String, default: 'Diesel-Premium' },
    created_at: { type: Date, default: Date.now() }
});

module.exports = model('carga', cargaSchema);