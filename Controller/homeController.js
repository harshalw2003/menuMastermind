const path = require('path');

const homePage = (req,res)=>{

  
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
        
        
}


module.exports= { homePage,

}