const connection = require('../config/connection');
const Teste = require('../models/testeModel');

const getAll = async () => {
    /*
    const [rows] = await connection.execute('SELECT * FROM teste');
    return rows.map(row => new Teste(row.id, row.nome));
    */
   return {msg: 'Deu certo GET'}
};

const createTeste = async (teste) => {
    /*
    const { nome } = teste;
    const query = 'INSERT INTO teste (id, nome) VALUES (UUID(), ?)';
    const [result] = await connection.execute(query, [nome]);
    return { insertId: result.insertId };
    */
    return {msg: 'Deu certo Create'}
};

const deleteTeste = async (id) => {
    /*
    const query = 'DELETE FROM teste WHERE id = ?';
    const [result] = await connection.execute(query, [id]);
    return result;
    */
    return {msg: 'Deu certo Delete'}
};

const updateTeste = async (id, teste) => {
    /*
    const { nome } = teste;
    const query = 'UPDATE teste SET nome = ? WHERE id = ?';
    const [result] = await connection.execute(query, [nome, id]);
    return result;
    */
    return {msg: 'Deu certo Update'}
};

module.exports = {
    getAll,
    createTeste,
    deleteTeste,
    updateTeste
};
