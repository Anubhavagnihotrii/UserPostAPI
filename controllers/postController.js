const prisma = require('../prisma/index')

exports.createPost = async (req,res, next)=>{
    try {
        const{title,body,authorId}=req.body;
        
        if(!title || !body || !authorId){
            throw new Error("Please fill all the required fields !")
        }
       
        const result = await prisma.post.create({
            data:{
                title,
                body,
                author: {connect:{id:authorId} }
            }
        })

        res.json(result);
    } catch (error) {
        throw new Error(error);
    }
}

exports.updatePost = async(req,res,next)=>{
   const {id} = req.params;
   const {title,body}=req.body;
   try {
    const result = await prisma.post.update({
        where:{id:id},
        data:{
            title:title, 
            body:body 
        },
    })
    res.json(result);
   } catch (error) {
    res.json({error:`Post with ${id} does not exist`})
   }
}

exports.deletePost = async(req,res,next)=>{
    const {id} =req.params;
    try {
        const result = await prisma.post.delete({
            where:{id:id}
        })
        res.json(result)
    } catch (error) {
        throw new Error(error);
    }
}


exports.getAllPost = async(req,res,next)=>{
    try {
        const result = await prisma.post.findMany()
        res.json(result);
    } catch (error) {
        res.json({error:`Not able to fetch Posts`})
    }
}