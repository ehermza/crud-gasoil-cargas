const { Schema, model } = require('mongoose');

const tareaSchema = new Schema(
    {
        title: String,
        description: String,
        created_at: { type: Date, default: Date.now() },
        status: { type: Boolean, default: false }
    });

module.exports = model('charge', tareaSchema);
