const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

//list
exports.listMentions = async () => {

    const res = await Mentions.find({}, 'friend mention -_id ');
    return res;

};
//Create
exports.createMention = async data => {
    const mention = new Mentions(data);
    await mention.save();
};

//Update
exports.updateMentions = async (id, data) => {
    await Mentions.findByIdAndUpdate(id, {
        $set:data
    });
};

//Delete
exports.deleteMentions = async id => {
    await Mentions.findByIdAndRemove(id);
};