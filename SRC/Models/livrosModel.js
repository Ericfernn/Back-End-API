const connection = require ('../Config/db');

const livrosModel = {
    buscarTodos: (callback) => {
        const sql = 'SELECT * FROM livros';
        connection.query(sql, callback);
    },

    buscarPorId: (id, callback) => {
        const sql = 'SELECT * FROM livros WHERE id = ?';
        connection.query(sql, [id], callback);
    },

    criarLivro: (dados, callback) => {
            const sql = "INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)";
            connection.query(sql, [dados.titulo, dados.autor, dados.ano], callback);
    },

    atualizarLivro: (id, dados, callback) => {
        const sql = "UPDATE livros SET titulo = ?, autor = ?, ano = ? WHERE id = ?";
        connection.query(sql, [dados.titulo, dados.autor, dados.ano, id], callback
        );
    },

    deletarLivro: (id, callback) => {
        const sql = "DELETE FROM livros WHERE id = ?";
        connection.query(sql, [id], callback);
    }
};





module.exports = livrosModel; 