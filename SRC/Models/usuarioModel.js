const connection = require ('../Config/db');

const usuarioModel = {
    buscarTodos: (callback) => {
        const sql = 'SELECT * FROM Usuarios';
        connection.query(sql, callback);
    },

    buscarPorId: (id, callback) => {
        const sql = 'SELECT * FROM Usuarios WHERE id = ?';
        connection.query(sql, [id], callback);
    },

    criarUsuario: (dados, callback) => {
            const sql = "INSERT INTO Usuarios (nome, matricula, tipo) VALUES (?, ?, ?)";
            connection.query(sql, [dados.nome, dados.matricula, dados.tipo], callback);
    },
    atualizarUsuario : (id, dados, callback) => {
        const sql = "UPDATE Usuarios SET nome = ?, matricula = ?, tipo = ? WHERE id = ? ";
        connection.query(sql, [dados.nome, dados.matricula, dados.tipo, id], callback);
    },
    deletarUsuario : (id, callback) => {
        const sql = "DELETE FROM Usuarios WHERE id = ?";
        connection.query(sql, [id], callback);
    }
};



module.exports = usuarioModel; 