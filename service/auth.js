// const sessionIdToUserMap =new Map(); this is for statefull authentication;
const jwt = require("jsonwebtoken");
const secret="Deepak@2004";
function setUser(user){
    // sessionIdToUserMap.set(id,user);
    const payload={
        _id:user._id,
        email:user.email,
        role:user.role,
    }

    return jwt.sign(payload,secret)
}

function getUser(token){
    if(!token){
        return null;
    }
    try{
        return jwt.verify(token,secret);
    }
    catch(error){
        return null;    
    }

    // return sessionIdToUserMap.get(id);
    
    
}
module.exports={setUser,getUser,};