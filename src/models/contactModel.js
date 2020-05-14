import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema  = new Schema({
    firstname: {
        type: String,
        required: 'Enter your first name'
    },
    lastname: {
        type: String,
        required: 'Enter your first name'
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    alternative_number: {
        type: Number,
    },
    phone: {
        type: Number,
        required: true
    },
    gender: {
        type: String
    },
    state: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})