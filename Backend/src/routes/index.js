const { Router } = require('express')
const router = Router()

// routes
router.get('/test', (req,res)=> {
    const data = {
        "name" : "Joanna",
        "truuuh": "Aloha"
    };
    res.json(data)
})

module.exports = router;