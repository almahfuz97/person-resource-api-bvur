const mongoose = require('mongoose');
const mongodb = require('mongodb')

const peopleSchema = mongoose.Schema({
    id: {
        type: String,
        default: new mongodb.ObjectId().toString()
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        index: true,
        unique: true
    }
}, { collection: 'persons' })

peopleSchema.path('email').validate(async (email) => {

    const isExist = await mongoose.models.Person.countDocuments({ email });
    return !isExist;

}, 'Email is already exist!')


module.exports = peopleSchema;