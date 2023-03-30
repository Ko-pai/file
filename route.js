const express = require("express")
const router = express.Router()

 
router.get("/people",(req,res)=>{
    const data = [
        { 
            name :"Mg Mg",
            age :20,
            region : "Yangon"
        },
        { 
            name :"Mi Ni",
            age :18,
            region : "Mandalay"
        },
        { 
            name :"Ag Ag",
            age :30,
            region : "Yangon"
        },
        { 
            name :"Mi Ni",
            age :18,
            region : "Mandalay"
        },
        { 
            name :"Ag Ag",
            age :30,
            region : "Yangon"
        },
        { 
            name :"Mi Ni",
            age :18,
            region : "Mandalay"
        },
        { 
            name :"Ag Ag",
            age :30,
            region : "Yangon"
        },
        { 
            name :"Mi Ni",
            age :18,
            region : "Mandalay"
        },
        { 
            name :"Ag Ag",
            age :30,
            region : "Yangon"
        },
    ]
    
    
    return res.status(200).json(data)
})

router.get("/people/:id",(req,res)=>{
        const id = req.params.id
        
        return res.status(200).json(id)
})

module.exports = router