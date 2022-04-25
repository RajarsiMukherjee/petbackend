const express = require("express")
const Pet = require("../models/petModals");

const router = express.Router()

router.post("",async(req,res) => {
    try {
        console.log(req.body)
        const pet = await Pet.create(req.body)
        return res.send(pet)
    } catch (error) {
       return res.send(500).send({message: error.message})
    }
})



router.get("", async (req, res) => {
    try {
      const pet = await Pet.find().lean().exec();
      console.log(pet)
      return res.send(pet)
    } catch (error) {
      return res.send(error);
    }

    
  });

module.exports= router