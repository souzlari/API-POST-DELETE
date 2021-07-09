const contatos = require("../models/contatos.json");

const home = (req, res) => {
    res.status(200).send({
        "message": "Olá, pessoa, seja bem vinde à lista de contatos!"
    })
};

const getAll = (req, res) => {
    res.status(200).send(contatos)
};

const getContactId = (req, res) => {
    const requestId = req.params.id
    const nomeFiltrado = contatos.filter(contato => contato.id == requestId)

    res.status(200).send(nomeFiltrado)
};

const createContact = (req, res) => {
    const idRequest = req.body.id
    const nomeRequest = req.body.nome
    const celularRequest = req.body.celular
    const redesRequest = req.body.redesSociais

    const novoContato = {
        id: idRequest,
        nome: nomeRequest,
        celular: celularRequest,
        redesSociais: redesRequest
    };

    contatos.push(novoContato)
    res.status(200).send(novoContato)
};

const deleteContact = (req, res) => {
    const idRequerido = req.params.id;
    const contatoFiltrado = contatos.find(contato => contato.id == idRequerido);

    const indice = contatos.indexOf(contatoFiltrado);
    console.log(indice);

    contatos.splice(indice, 1);

    res.status(200).send(
        [
            {
                "mensagem": "Contato deletado com sucesso!"
            },
            contatos
        ]
    )

};

module.exports = {home, getAll, getContactId, createContact, deleteContact}