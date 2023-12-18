const jwt = require('jsonwebtoken')
const { user } = require('../prisma')
const getJwtToken =(userId)=>{
    return jwt.sign({userId:userId},process.env.JWT_SECRET,{expiresIn:'1 day'})
}


module.exports = getJwtToken;