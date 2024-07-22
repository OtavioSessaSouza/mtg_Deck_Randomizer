import { Request, Response } from "express";

exports.home = async(req : Request, res : Response)=>{
    try {
        const functions = {
            "Build deck at" : ["/build"],
            "cards" : ["/testcard","/randomCM"]
        } ; 
        res.status(200).send(functions);
    } catch (error) {
      res.status(400).send({ message: error.message });
      console.log(error);
    }
};
