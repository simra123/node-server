const express = require('express')
const router = express.Router()
const {people} = require('../products')

//setting up the different router folder to clean our router.js using express

//get
router.get('/' , (req, res) => {
    res.json({success : true , data : people})
 })

 //post
router.post('/' , (req , res)=>{
     const {name} = req.body
    //name is the object key we have setted in input element 
    //and express.json() helped to get us the name object in req.body
     if(!name){
         res.status(400).json({success : true , msg : 'please provide valid value'})
     }else{
        res.status(201).json({success : true , person: name})
    }
})
 
//put or update
router.put('/:id' , (req, res)=>{
     const {id} = req.params
     const {name} = req.body
     console.log(name , id)
     //find the given id 
     const person = people.find((person)=>
          person.id == Number(id)
         )
     console.log(person)
 
     //check if the given id is undefine
 
     if(!person){
     res.status(400).json({success: false, message : `theres no person with the id ${id}`})
     }else{
     //if the id is true and make a map of all peoples
     const newPeople = people.map((person) => {
        //routerly the same find condition
        if(person.id === Number(id)){
            //maps the whole array to check the id then change the name of that specific id
            person.name = name
        }
        //change it and return and whole changes array
        return person
    })
        res.status(200).json({success : true, data: newPeople})
    }
})

//delete
router.delete('/:id' , (req , res) => {
 //this is the same as patch but here we will not destructure the object
 const person = people.find((person)=> person.id == Number(req.params.id))
  if(!person){
    res.status(400).json({success : false, message: `no person with the id ${req.params.id}`})
 }else{
    const newPeople = people.filter((allPeople)=>  allPeople.id !== Number(req.params.id))
    return res.status(200).json({succcess: true, data : newPeople})
}
})
        
//exports the whole
module.exports = router
 
 