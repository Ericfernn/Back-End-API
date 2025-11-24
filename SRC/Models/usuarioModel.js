const connection = require ('../Config/db');

const usuarioModel = {
    buscarTodos: (callback) => {
        const sql = 'SELECT * FROM usuario';
        connection.query(sql, callback);
    },

    buscarPorId: (id, callback) => {
        const sql = 'SELECT * FROM usuario WHERE id = ?';
        connection.query(sql, [id], callback);
    },

    adicionarUsuario: (dados, callback) => {
            const sql = "INSERT INTO usuario (nome, matricula, tipo) VALUES (?, ?, ?)";
            connection.query(sql, [dados.nome, dados.matricula, dados.tipo], callback);

    },
    atualizarUsuario : (id, dados, callback) => {
        const sql = "UPDATE usuario SET nome = ?, matricula = ?, tipo = ? WHERE id = ? ";
        connection.query(sql, [dados.nome, dados.matricula, dados.tipo, id], callback);
    },
    deletarUsuario : (id, callback) => {
        const sql = "DELETE FROM usuario WHERE id = ?";
        connection.query(sql, [id], callback);
    }
};



module.exports = usuarioModel; 