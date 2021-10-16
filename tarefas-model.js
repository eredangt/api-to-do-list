const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TarefasSchema = new Schema({
    descricao: { type: String, required: true },
    prazo: { type: Date, required: true },
    completa: { type: Boolean, required: true }
}, { versionKey: false });

module.exports = mongoose.model('Tarefas', TarefasSchema)
