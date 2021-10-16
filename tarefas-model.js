const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TarefasSchema = new Schema({
    id: { type: Number, required: true },
    description: { type: String, required: true },
    deadline: { type: Date, required: true },
    complete: { type: Boolean, required: true }
})

module.exports = mongoose.model('Tarefas', TarefasSchema)
