const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({
            message:"invalid authentication"
        })

        jwt.verify(token, process.env.ACCESS_TOKEN, (err,user)=>{
            if(err) return res.status(400).json({
                message: 'invalid authentication'
            })
            req.user = user
            next()
        })
    } catch (err) {
        err.status(500).json({
            message:err.message
        })
    }
}

module.exports = auth