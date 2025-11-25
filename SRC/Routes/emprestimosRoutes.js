const express = require('express'); // Importa o Express para criar as rotas
const connection = require ('../Config/db');// Importa a conexão com o banco (mesmo que não seja usada aqui)
const router = express.Router(); // Cria um objeto de rotas do Express
const emprestimosController = require("../Controllers/emprestimosController");// Importa o controller de empréstimos

router.get("/", emprestimosController.buscarTodos);// Rota GET para listar todos os empréstimos

router.get("/:id", emprestimosController.buscarPorId);// Rota GET para buscar um empréstimo pelo ID

router.post("/", emprestimosController.adicionarEmprestimo);// Rota POST para adicionar um novo empréstimo

router.put("/:id", emprestimosController.atualizarEmprestimo);// Rota PUT para atualizar um empréstimo existente

router.delete("/:id", emprestimosController.deletarEmprestimo);// Rota DELETE para remover um empréstimo

module.exports = router; // Exporta o router para ser usado no arquivo principal (app.js)
