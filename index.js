const express = require("express")
const mongoose = require("mongoose")

const tarefa_controller = require('./tarefas-controller')

mongoose.connect('mongodb+srv://toDoList:J530wleRuf2Vlhfs@cluster-api-to-do-list.kcurz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise
try {
    let db = mongoose.connection
    db.on('errr', console.error.bind(console, 'Erro de Conexao no Banco'))
} catch (e) {
    console.log(e)
}

const router = express.Router()

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Pagina Inicial')
})

router.post('/tarefas', tarefa_controller.incluirTarefa)
router.get('/tarefas', tarefa_controller.listarTarefas)
router.get('/tarefas/:id', tarefa_controller.buscarTarefa)
router.delete('/tarefas/:id', tarefa_controller.excluirTarefa)
router.put('/tarefas/:id', tarefa_controller.alterarTarefa)

app.use('/', router)

let porta = process.env.PORT || 4000

app.listen(porta, () => {
    console.log("Servidor em execucao na porta " + porta)
})
