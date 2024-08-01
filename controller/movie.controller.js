import prisma from '../DB/db.config.js'

export const store= async (req,res)=>{
        const {name}=req.body;

        const movie=await  prisma.movie.create({
            data:{
                name
            }
        })

        return res.jsone({status:200,movie,message:"Movie added successfuly"})
}