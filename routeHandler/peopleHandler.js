const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const peopleSchema = require('../schemas/peopleSchema');

const Person = new mongoose.model('Person', peopleSchema)

// GET ALL PEOPLE
router.get('/', async (req, res) => {
    await Person.find({}, (err, data) => {
        if (err) {
            res.json({ message: err.message })
        }
        else {
            if (data) {
                res.status(200).json({ data: data })
            }
            else {
                res.status(404).json({ message: 'Not found' })

            }
        }
    }).clone()

})

// GET a Person
router.get('/:id', async (req, res) => {
    await Person.findOne({ id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ message: err.message })
        }
        else {
            if (data) {
                res.status(200).json({ data: data })
            }
            else {
                res.status(404).json({ message: 'Not found' })

            }

        }
    }).clone()
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
            res.json({ message: err.message })
        }
        else {
            res.status(200).json({ message: 'Person added successfully' })

        }
    });
})

// update a  Person
router.put('/:id', async (req, res) => {
    delete req.body.email;
    await Person.findOneAndUpdate({ id: req.params.id }, {
        $set: {
            ...req.body
        }
    }, (err, data) => {
        console.log(data)
        if (err) {
            res.status(500).json({ message: err.message })
        }
        else {
            if (data) {
                res.status(200).json({ data: data })
            }
            else {
                res.status(404).json({ message: 'Not found' })

            }
        }
    }).clone()



})

// delete a  Person
router.delete('/:id', async (req, res) => {
    await Person.deleteOne({ id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }
        else {
            res.status(200).json({ message: 'Person deleted successfully' })

        }
    }).clone()

})

module.exports = router;