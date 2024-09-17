var jwt=require("jsonwebtoken")
const JWT_SECRET='Harryisagood$oy'

const fetchuser=(req,res,next)=>{
    
    const token=req.header('auth-token');
    if(!token){
        console.log("no token provided")
        return res.status(401).send({error:"Please authenticate using a valid token"});

    }
    try{
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    }
    catch(error){
        return res.status(401).send({error:"Please authenticate using a valid token"})
    }
}

module.exports=fetchuser;