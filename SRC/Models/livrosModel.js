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
        // Agora usando as colunas REAIS do seu banco
        const sql = "INSERT INTO livros (titulo, autor, categoria, disponibilidade) VALUES (?, ?, ?, ?)";
        connection.query(sql, [
            dados.titulo,
            dados.autor,
            dados.categoria,
            dados.disponibilidade
        ], callback);
    },

    atualizarLivro: (id, dados, callback) => {
        const sql = "UPDATE livros SET titulo = ?, autor = ?, categoria = ?, disponibilidade = ? WHERE id = ?";
        connection.query(sql, [
            dados.titulo,
            dados.autor,
            dados.categoria,
            dados.disponibilidade,
            id
        ], callback);
    },

    deletarLivro: (id, callback) => {
        const sql = "DELETE FROM livros WHERE id = ?";
        connection.query(sql, [id], callback);
    }
};





module.exports = livrosModel; 