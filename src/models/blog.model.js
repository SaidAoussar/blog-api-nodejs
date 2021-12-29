const mongoose = require('mongoose')


const BlogSchema = new mongoose.Schema({ 
    title: String,
    body: String,
    postTime: Date,
    tags: Array,
    author: {
        type: mongoose.SchemaType.ObjectId,
        ref: "user",
        required: true
    },
    timestamps: true

});

// https://stackoverflow.com/questions/18001478/referencing-another-schema-in-mongoose

//https://dev.to/mkilmer/how-create-relationships-with-mongoose-and-node-js-with-real-example-43ei


module.exports = mongoose.model('blog',BlogSchema)