const emprestimosModel = require("../Models/emprestimosModel"); // Importa o model responsável por acessar o banco de dados dos empréstimos

const emprestimosController = { // Objeto que contém todos os métodos do controller
    buscarTodos: (req, res) => { // Método para buscar todos os empréstimos
        emprestimosModel.buscarTodos((err, result) => {// Chama a função do model que busca todos
            if (err) {
                console.error("Erro ao buscar emprestimos:", err); //Exibe erro no console
                return res.status(500).json({ erro: "Erro ao buscar emprestimos" }); // Retorna erro ao cliente
            }

            res.json(result); //Retorna o resultado da consulta
        });
    },

    buscarPorId: (req, res) => { // Método para buscar um empréstimo por ID
        const { id } = req.params; // Extrai o ID da URL

     emprestimosModel.buscarPorId(id, (err, result) => { // Chama o model passando o ID
            if (err) {
                console.error("Erro ao buscar emprestimo pelo ID:", err); // Log do erro
                return res.status(500).json({ erro: "Erro ao buscar emprestimo pelo ID" });// Retorna erro
            }

            if (result.length === 0) { // Se não encontrar nenhum empréstimo
                return res.status(404).json({ erro: "emprestimo não encontrado!" }); // Retorna NOT FOUND
            }

            res.json(result[0]); // Retorna apenas o primeiro registro encontrado
        });
    },

    adicionarEmprestimo: (req, res) => { // Método para adicionar um novo empréstimo
        const dados = req.body; // Dados enviados pelo cliente

        emprestimosModel.adicionarEmprestimo(dados, (err, result) => {// Chama o model para inserir
            if (err) { // Se der erro ao inserir
                console.error("Erro ao Adicionar um novo emprestimo:", err);
                return res.status(500).json({erro: "Erro ao Adicionar um novo emprestimo: "});
            }

            res.status(201).json({mensagem: "emprestimo Adicionado com sucesso!", id: result.insertId }); // Retorna CREATED // Retorna o ID gerado no banco
        });
    },

     atualizarEmprestimo: (req, res) => { // Método para atualizar um empréstimo existente
        const { id } = req.params; // Pega o ID da URL
        const dados = req.body; // Pega os novos dados do corpo da requisição

        emprestimosModel.atualizarEmprestimo(id, dados, (err, result) => {// Chama o model para atualizar
            if (err) {
                console.error("Erro ao atualizar emprestimo:", err);
                return res.status(500).json({ erro: "Erro ao atualizar emprestimo" });
            }

            if (result.affectedRows === 0) { // Se nenhuma linha foi alterada
                return res.status(404).json({ erro: "emprestimo não encontrado!" });// Não existe o ID informado
            }

            res.json({ mensagem: "emprestimo atualizado com sucesso!" });
        });
    },


     deletarEmprestimo: (req, res) => { // Método para deletar um empréstimo
        const { id } = req.params; // Pega o ID da URL

        emprestimosModel.deletarEmprestimo(id, (err, result) => { // Chama o model para deletar
            if (err) {
                console.error("Erro ao deletar emprestimo:", err);
                return res.status(500).json({ erro: "Erro ao deletar emprestimo" });
            }

            if (result.affectedRows === 0) { // Se o ID não existir no banco
                return res.status(404).json({ erro: "emprestimo não encontrado!" }); // Retorna NOT FOUND
            }

            res.json({ mensagem: "emprestimo deletado com sucesso!" });
        });
    }
};

module.exports = emprestimosController; // Exporta o controller para uso nas rotas
