var Tarefas = require('./tarefas-model')

exports.excluirTarefa = function (req, res) {
    Tarefas.findByIdAndDelete(req.params.id, function (err, tarefa) {
        if (err) return res.status(404).json(err)
        return res.status(204).send("Tarefa excluida")
    })
}

exports.alterarTarefa = function (req, res) {
    const doc = { descricao: req.body.descricao, prazo: req.body.prazo, completa: req.body.completa }
    Tarefas.findByIdAndUpdate(req.params.id, doc, function (err, tarefa) {
        if (err) return res.status(404).json(err)
        return res.status(201).send("Tarefa alterada")
    })
}

exports.listarTarefas = function (req, res) {
    Tarefas.find({}, function (err, tarefas) {
        if (err) return res.status(404).json(err)
        return res.status(200).json(tarefas)
    })
}

exports.buscarTarefa = function (req, res) {
    Tarefas.findById(req.params.id, function(err, tarefa){
        if (err or tarefa == null) return res.status(404).json(err)
        return res.status(200).json(tarefa)
    })
}

exports.incluirTarefa = function (req, res) {
    let tarefa = new Tarefas({
        descricao: req.body.descricao,
        prazo: req.body.prazo,
        completa: req.body.completa
    })
    tarefa.save(function (err){
        if (err) return next(err)
        return res.status(201).send("Tarefa criada")
    })
}
