import mongoose from 'mongoose';
import {ContactSchema} from '../models/contactModel.js';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body)

    newContact.save((err, contact) => {
        console.log('my first error is:', err)
        if(err) {
            res.send(err);
        } else {
            res.json(contact)
        }
    })
    
}
export const getContact = (req, res) => {
    // let newContact = new Contact(req.body)
    Contact.find({}, (err, contact) => {
        if(err) {
            // console.log('my first error is:', err)
            res.send(err);
        } else {
            // console.log(contact)
            res.json(contact)
        }
    })
    
}
export const getSingleContact = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if(err) {
            res.send(err);
        } else {
            console.log(contact)
            res.json(contact)
        }
    })
    
}                                                                                                                                                                                                                                                                                                                                                                                                                                          