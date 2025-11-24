const connection = require ('../Config/db');
const emprestimosModel = {
    buscarTodos: (callback) => {
        const sql = 'SELECT * FROM Emprestimos';
        connection.query(sql, callback);
    },

    buscarPorId: (id, callback) => {
        const sql = 'SELECT * FROM Emprestimos WHERE id = ?';
        connection.query(sql, [id], callback);
    },

    adicionarEmprestimo: (dados, callback) => {
            const sql = "INSERT INTO Emprestimos (idLivro, idUsuario, dataEmprestimo, dataDevolucao) VALUES (?, ?, ?, ?)";
            connection.query(sql, [ dados.idLivro, dados.idUsuario,dados.dataEmprestimo,dados.dataDevolucao], callback);
},

    atualizarEmprestimo: (id, dados, callback) => {
         const sql = "UPDATE Emprestimos SET idLivro = ?, idUsuario = ?, dataEmprestimo = ?, dataDevolucao = ? WHERE id = ?";
        connection.query(sql, [dados.idLivro, dados.idUsuario, dados.dataEmprestimo, dados.dataDevolucao, id], callback);
},

    deletarEmprestimo: (id, callback) => {
        const sql ="DELETE FROM Emprestimos WHERE id = ?";
        connection.query(sql, [id], callback);
    }
};



module.exports = emprestimosModel; 