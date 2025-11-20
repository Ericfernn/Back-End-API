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

    criarEmprestimo: (dados, callback) => {
            const sql = "INSERT INTO Emprestimos (id_livro, nome_pessoa, data_emprestimo) VALUES (?, ?, ?)";
            connection.query(sql, [dados.id_livro, dados.nome_pessoa, dados.data_emprestimo], callback);
},

    atualizarEmprestimo: (id, dados, callback) => {
        const sql = "UPDATE Emprestimos SET id_livro = ?, nome_pessoa = ?, data_emprestimo = ? WHERE id = ?"
        connection.query(sql, [dados.id_livro, dados.nome_pessoa, dados.data_emprestimo, id], callback)
    },

    deletarEmprestimo: (id, callback) => {
        const sql ="DELETE FROM Emprestimos WHERE id = ?";
        connection.query(sql, [id], callback);
    }
};



module.exports = emprestimosModel; 