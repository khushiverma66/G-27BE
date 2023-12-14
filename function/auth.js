const {User}=require('../model/user')
const login=async (req,res)=>{
    const {email,password}=req.body
    const user=await User.find({email,password})
    if(user.length>0)
    {
        res.send({status:true,user})
    }
    else{
        res.send({status:false , message: "invalid creds"})
    }
}
const logout=(req,res)=>{
    res.send("hii i am logout")
}
const signup=async (req,res)=>{
    console.log("enteredddddd signup");
    const {name,email,password}=req.body
    const user=await User({name,email,password})
    user.save();
    res.send("signup successful")
}

module.exports={login,logout,signup}