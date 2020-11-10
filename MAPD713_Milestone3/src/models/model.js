import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PatientSchema = new Schema({
    fullName: {
        type: String,
        required: 'Enter full name'
    },
    email: {
        type: String,
        required: 'Enter email'
    },
    mobileNum: {
        type: Number,
        required: 'Enter mobile number'
    },
    age: {
        type: Number,
        required: 'Enter age'
    },
    bloodType: {
        type: String,
        required: 'Enter blood type'
    },
    address: {
        type: String,
        required: 'Enter address'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export const SignUpSchema = new Schema({
    userName: {
        type: String,
        required: 'Enter user name'
    },
    email: {
        type: String,
        required: 'Enter email'
    },
    password: {
        type: String,
        required: 'Enter password'
    },
    date: {
        type: Date,
        default: Date.now
    }
});