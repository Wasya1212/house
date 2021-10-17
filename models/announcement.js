import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const announcementSchema = new Schema({
    image: {
        type: Schema.Types.Mixed,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
});

export default model('Announcement', announcementSchema);