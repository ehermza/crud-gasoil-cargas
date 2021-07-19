const { Schema, model } = require('mongoose');
var dateFormat = require("dateformat");
const { weekNumber } = require('weeknumber');
// const randomstring = require('randomstring');

const cargaSchema = new Schema({
    to: { type: String, default: '@CONSUMIDOR FINAL' },
    liters: { type: Number, require: true },
    price: { type: Number },
    price_byliter: { type: Number },
    weekofyear: Number,
    //  { type: Number, default: weekNumber(new Date()) },
    n_ticket: String,
    product: { type: String, default: 'Diesel-Premium' },
    date_charge : Date,
    created_at: { type: Date, default: Date.now() }
});

module.exports = model('carga', cargaSchema);