import express from 'express';
import { addNewContact, 
         getContact,
        getSingleContact,
     } 
from '../controllers/contactController.js';

const router = express.Router()

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware   
            console.log(`Request from: ${req.orignalUrl}`)
            console.log(`Request type: ${req.method}`) 
            next();    
            }, getContact)
            // (req, res, next) => {
            //         res.send('Get request was successful!')
            //     } 
        

        .post(addNewContact);
        // res.send('Post request was successful'));
    
    app.route('/contact/:contactID')
        .get(getSingleContact)  
              
        .put((req, res) => 
        res.send('Update request was successful!'))

        .delete((req, res) =>
        res.send('Delete request was successful!'));
    
}
 export default routes;
