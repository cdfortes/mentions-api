const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');
const repository = require('../repositories/mentions-repository');
const { validationResult } = require('express-validator');



//list
exports.listMentions = async (req, res) => {

    try {
        const data = await repository.listMentions();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({message:'Falha ao carregar os dados'});
    }

};

//Create
exports.createMentions = async (req, res) => {
    const { errors } = validationResult(req);

    if(errors.length > 0) {
        return res.status(400).send({message: errors})
    }

    try {
        await repository.createMention({
            friend: req.body.friend,
            mention: req.body.mention
          });

         res.status(201).send({message:'Success on load the mention'});
    } catch (error) {
        res.status(500).send({message:'Some error on load the mention, pls verify'});
    }
};


//Update
exports.updateMentions = async (req, res) => {
    const { errors } = validationResult(req);

    if(errors.length > 0) {
        return res.status(400).send({message: errors})
    }

    try {
        await repository.updateMention(req.params.id, req.body);
        res.status(200).send({message:'Success on update the mention'});
    } catch (error) {
        res.status(500).send({message:'Fail on load the mention, pls verify'});
    }
};

//Delete
exports.deleteMentions = async (req, res) => {
    

    try {
        await repository.deleteMention(req.params.id);
        res.status(200).send({message:'Success on delete the mention'});
    } catch (error) {
        res.status(500).send({message:'Fail on load the mention, pls verify'});
    }
};