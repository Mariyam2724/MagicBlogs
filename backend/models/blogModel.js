// signup form    
const {Schema, model} = require('../connection');

const myschema = new Schema({
    title:String,
    description:String,
    category:String,
    text:String,
    createdAt:Date,
    image:String,
    data: Object,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    video: {
        type: Schema.Types.ObjectId,
        ref: 'videos'
    },
});

module.exports = model('blogs',myschema);