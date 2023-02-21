import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product"

export default async function handler(req,res){
    const {method,query:{id},cookies}=req;
    const token=cookies.token
    await dbConnect()
    if(method==="GET"){
        try {
           const product=await Product.findById(id);
          return res.status(200).json(product) 
        } catch (error) {
           return res.status(500).json(error)
        }
    }

    
    if(method==="PUT"){
        if(!token || token !==process.env.token){
            return res.status(401).json("Not Authenticated!")
        }
        try{

            const product=await Product.findByIdAndUpdate(id,req.body,{
                new:true,
            })
            res.status(201).json(product)
        }
        catch(err){
            res.status(500).json(err);
        }
    }

    
    if(method==="DELETE"){
        if(!token || token !== process.env.token){
            return res.status(401).json("Not authenticated!")
          }
        try{

            await Product.findByIdAndDelete(id);
            res.status(200).json("The product has been deleted!");
        }
        catch(err){
            res.status(500).json(err);
        }
    }

}