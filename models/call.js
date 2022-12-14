const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const ImageSchema = new Schema({
//     url: String,
//     filename: String,
// })

// ImageSchema.virtual('thumbnail').get(function(){
//     return this.url.replace('/upload', '/upload/w_200')
// });

const opts = { toJSON: { virtuals: true } };

const CallSchema = new Schema({
    name: String,
    // images: [ImageSchema],
    summary: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // leaders: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'User'
    //     }
    // ],
    // geometry: {
    //     type: {
    //         type: String,
    //         enum: ['Point'],
    //         required: true
    //     },
    //     coordinates: {
    //         type: [Number],
    //         required: true
    //     }
    // },
    location: String,
    time: String,
    action: String,
    links: [String],
    contact: String,
    // offerings: String,
    // needs: String,
    // supporters: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'User'
    //     }
    // ],
    // groups: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Group'
    //     }
    // ],
}, opts);

// CTASchema.virtual('properties.popUpMarkup').get(function(){
//     return `
//     <strong><a href="/initiatives/${this._id}">${this.title}</a></strong>
//     <p>${this.description.substring(0,100)}...</p>
//     `;
// });


module.exports = mongoose.model('Call', CallSchema);