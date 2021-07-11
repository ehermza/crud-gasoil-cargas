const { Schema, model } = require('mongoose');
var dateFormat = require("dateformat");

const cargaSchema = new Schema({
    to: { type: String, default: '@CONSUMIDOR FINAL' },
    liters: { type: Number, require: true },
    price: { type: Number },
    n_ticket: { type: String, default: '00000000' },
    product: { type: String, default: 'Diesel-Premium' },
    created_at: { type: Date, default: Date.now() }
});

module.exports = model('carga', cargaSchema);