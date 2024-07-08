exports.home = async(req,res)=>{
    try {
        const functions = {
            "Build deck at" : ["/build"]
        } ; 
        res.send(functions);
    } catch (error) {
      res.send('error');
      console.log(error);
    }
};