var Tarefas = require('./tarefas-model')

exports.excluirTarefa = function (req, res) {
    Tarefas.findByIdAndDelete({ id: req.params.id }, function (err, tarefa) {
        if (err) return next(err)
        else res.send('Tarefa exluida com sucesso.')
    })
}

exports.alterarTarefa = function (req, res) {
    Tarefas.findByIdAndUpdate({ id: req.params.id },
        {
            description: req.body.description,
            deadline: req.body.deadline,
            complete: req.body.complete
        },
        function (err, tarefa) {
            if (err) return next(err)
            else res.send('Tarefa alterada com sucesso.')
        }
    );
}

exports.listarTarefas = function (req, res) {
    Tarefas.find({}, function (err, tarefas) {
        if (err) return next(err)
        return res.json(tarefas);
    })
}

exports.buscarTarefa = function (req, res) {
    Tarefas.findById(req.params.id, function(err, tarefa){
        if (err) return next(err)
        return res.json(tarefa)
    })
}

exports.incluirTarefa = function (req, res) {
    let tarefa = new Tarefas({
        id: req.body.id,
        description: req.body.description,
        deadline: req.body.deadline,
        complete: req.body.complete
    })
    tarefa.save(function (err){
        if (err) return next(err)
    })
    res.send('Tarefa incluida com sucesso.')
}