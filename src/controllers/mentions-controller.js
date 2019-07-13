const mongoose = require('mongoose');
const Mentions = require('../models/mentions');

//list
exports.listMentions = async (res, req) => {

    try {
        const data = await Mentions.find({});
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({message:'Falha ao carregar os dados'});
    }

};

//Create
exports.createMentions = async (res, req) => {
    try {
        const mention = new Mentions({
            friend: req.body.friend,
            mention: req.body.mention,

         });

         console.log(mention);

         await mention.save();

         res.status(201).send({message:'Success on load the mention'});
    } catch (error) {
        res.status(500).send({message:'Some error on load the mention, pls verify'});
    }
};