const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const peopleSchema = require('../schemas/peopleSchema');

const Person = new mongoose.model('Person', peopleSchema)

// GET ALL PEOPLE
router.get('/', async (req, res) => {
    // new Person().

})

// GET a Person
router.get('/:id', async (req, res) => {

})

// add a new Person
router.post('/', async (req, res) => {
    const { firstName, lastName, age, email } = req.body;
    const personInfo = {
        firstName,
        lastName,
        age,
        email
    }

    const newPerson = new Person(personInfo)

    await newPerson.save((err) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }
        else {
            res.status(200).json({ message: 'Person added successfully' })

        }
    });
})

// update a  Person
router.put('/:id', async (req, res) => {

    console.log(req.params.id)
    delete req.body.email;
    await Person.findOneAndUpdate({ id: req.params.id }, {
        $set: {
            ...req.body
        }
    }, (err) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }
        else {
            res.status(200).json({ message: 'Person\'s info updated successfully' })

        }
    }).clone()



})

// delete a  Person
router.delete('/:id', async (req, res) => {

})

module.exports = router;