const jwt = require('jsonwebtoken')
const userModel = require('../Model/userModel.js');


const authenticateToken = async (req, res, next) => {

    const token = req.cookies.token;
    if(token){
      console.log(`Authentication token : ${token}`)
      jwt.verify(token, process.env.JWT_SECRET_KEY,async  (err, user) => {
        console.log(user)
        if (err) {return res.status(403).send('Invalid Token');}
        else{
  
        const userDetails = await userModel.findById(user._id)
  
        req.user = userDetails;
        console.log(req.user)
        next();}
      });
    }else{

    res.status(401).json({
      success: false,
      message: "You are not authenticated"
    });
    }
   
}


module.exports ={authenticateToken,

}