const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

//list
exports.listMentions = async () => {

    const res = await Mentions.find({}, 'friend mention -_id ');
    return res;

};

exports.createMention = async data => {
    const mention = new Mentions(data);
    await mention.save();
};