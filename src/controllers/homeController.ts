exports.home = async(req,res)=>{
    try {
        const functions = {
            "cards" : ["/cards","/cards/random","/cards/randomCM"],
            "sets" : ["/sets"],
            "build" : ["/build"]
        } ; 
        res.send(functions);
    } catch (error) {
      res.send('error');
      console.log(error);
    }
};