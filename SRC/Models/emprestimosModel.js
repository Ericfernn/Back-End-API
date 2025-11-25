const connection = require ('../Config/db'); 
const emprestimosModel = {
    buscarTodos: (callback) => { // Método para buscar todos os empréstimos
        const sql = 'SELECT * FROM Emprestimos';// Consulta SQL que retorna todos os registros
        connection.query(sql, callback);// Executa a query e usa o callback para retornar o resultado
    },

    buscarPorId: (id, callback) => {// Método para buscar empréstimo específico pelo ID
        const sql = 'SELECT * FROM Emprestimos WHERE id = ?';// Query com parâmetro para buscar pelo ID
        connection.query(sql, [id], callback);// Executa a query, passando o ID como parâmetro
    },

    adicionarEmprestimo: (dados, callback) => {// Método para adicionar um novo empréstimo
            const sql = "INSERT INTO Emprestimos (idLivro, idUsuario, dataEmprestimo, dataDevolucao) VALUES (?, ?, ?, ?)";// Query de inserção
            connection.query(sql, [ dados.idLivro, dados.idUsuario,dados.dataEmprestimo,dados.dataDevolucao], callback);
},

    atualizarEmprestimo: (id, dados, callback) => {
         const sql = "UPDATE Emprestimos SET idLivro = ?, idUsuario = ?, dataEmprestimo = ?, dataDevolucao = ? WHERE id = ?"; // Valores que serão inseridos
        connection.query(sql, [dados.idLivro, dados.idUsuario, dados.dataEmprestimo, dados.dataDevolucao, id], callback);
},

    deletarEmprestimo: (id, callback) => { // Método para atualizar empréstimo existente
        const sql ="DELETE FROM Emprestimos WHERE id = ?";// Query de update
        connection.query(sql, [id], callback);// Novos valores + ID
    }
};



module.exports = emprestimosModel; 
