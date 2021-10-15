const express = require("express")
const mongoose = require("mongoose")

const estudante_controller = require('./estudantes-controller')

mongoose.connect('mongodb+srv://toDoList:J530wleRuf2Vlhfs@cluster-api-to-do-list.kcurz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise
try {
    let db = mongoose.connection
    db.on('errr', console.error.bind(console, 'Erro de Conex�o no Banco'))
} catch (e) {
    console.log(e)
}

const router = express.Router()

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('teste oi')
})

router.post('/estudantes', estudante_controller.cadastrarEstudante)
router.get('/estudantes', estudante_controller.listarEstudantes)
router.get('/estudantes/:id', estudante_controller.buscarEstudante)

app.use('/', router)


let porta = process.env.PORT || 4000

app.listen(porta, () => {
    console.log("servidor em execucao na porta " + porta)
})
