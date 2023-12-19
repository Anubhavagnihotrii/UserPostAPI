const cookieParser = require('cookie-parser')
const e = require('express')
const express = require('express')

require('dotenv').config()
const app=express()

// regular middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// cookie middleware
app.use(cookieParser())


const userRouter = require('./routes/userRoute')
const postRouter = require('./routes/postRoute')

app.use('/api',userRouter)
app.use('/api',postRouter)


app.get('/',(req,res)=>{
    res.send("Hy from anubhav");
})

app.listen(3000,()=>{
    console.log(`Server is running  on port 3000`);
})