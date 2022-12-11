const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const savingsSchema = new Schema({
    date: { type: Date, required: true},
    description: { type: String, required: true},
    amount: { type: Number, required: true}
})

const Savings = mongoose.model('Savings', savingsSchema);

module.exports = Savings;