const express = require('express')
const router = express.Router()
const Contact = require('../models/contactModel')

router.get('/',async (req,res)=>{

try{
    const contactList = await Contact.find()
    res.json(contactList)
}catch(err){
    res.status(400).json('Error : ' , err)
};

})

router.post('/add_contact',async (req,res)=>{
    
   const contact=new Contact ({
       name : req.body.name,
       telephone : req.body.telephone,
       email : req.body.email
   });

   try{
   const savedContact = await contact.save();
   res.json('Contact was added')
   }catch(err){
       res.status(400).json('Error : ', err)
   }
})
router.delete('/delete_contact/:idToDelete',async (req,res)=>{
    try{
        const deletedContact = await Contact.findByIdAndDelete({_id : req.params.idToDelete})
        res.status(200).json('contact deleted')

    }catch(err){
        res.status(400).json('Error : ',err)
    }
})
router.patch('/update_contact/:idToUpdate',async (req,res)=>{
    try{
        const updatedContact = await Contact.updateOne({_id : req.params.idToUpdate},
            {$set:
            {name:req.body.name,
            telephone:req.body.telephone,
            email: req.body.email}})
        res.status(200).json('contact updated')

    }catch(err){
        res.status(400).json('Error : ',err)
    }
})

module.exports  =  router;