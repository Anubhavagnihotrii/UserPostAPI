// bring in prisma and cookie
const prisma= require('../prisma/index');
const cookieToken = require('../utils/cookieToken')

// user signup
exports.signup = async (req,res)=>{
    try {
        const{name,email,password}=req.body;
        if(!name || !email || !password)
        {
            throw new Error('please provide other fields')
        }

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password,
            }
        })
        // send user a token
        cookieToken(user,res)
    } catch (error) {
        throw new Error(error)
    }
}

// user login
exports.login= async(req,res)=>{
    try {
        const{email,password}= await req.body;

        if(!email || ! password)
        {
            throw new Error("please provide and email and password");
        }

        // find a user based on email
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        });
        if(!user){
            throw new Error("User not found");
        }
        if(user.password !== password){
            throw new Error("password is wrong");
        }

        //  user is there and validation
            cookieToken(user, res)
    } catch (error) {
        throw new Error(error);
    }
}

// logout
exports.logout = async(req, res)=>{
    try {
        res.clearCookie('token')
        res.json({
            sucess: true
        })
    } catch (error) {
        throw new Error(error);
    }
}