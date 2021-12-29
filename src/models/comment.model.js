const mongoose = require('mongoose')


const CommentSchema = new mongoose.Schema({ 
    body: String,
    postTime: Date,
    author: {
        type: mongoose.SchemaType.ObjectId,
        ref: "user",
        required: true

    },
    bolgId: {
        type: mongoose.SchemaType.ObjectId,
        ref: "blog",
        required: true
    },
    timestamps: true
    
});



module.exports = mongoose.model('comment',CommentSchema)