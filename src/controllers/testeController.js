const testeService = require('../services/testeService');
const Teste = require('../models/testeModel');

const getAll = async (req, res) => {
    const testes = await testeService.getAll();
    return res.status(200).json(testes);
};

const createTeste = async (req, res) => {
    const { nome } = req.body;
    const newTeste = new Teste(null, nome);
    const createdTeste = await testeService.createTeste(newTeste);
    return res.status(201).json(createdTeste);
};

const deleteTeste = async (req, res) => {
    const { id } = req.params;
    const result = await testeService.deleteTeste(id);
    return res.status(204).json(result);
};

const updateTeste = async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const updatedTeste = new Teste(id, nome);
    const result = await testeService.updateTeste(id, updatedTeste);
    return res.status(200).json(result);
};

module.exports = {
    getAll,
    createTeste,
    deleteTeste,
    updateTeste
};
