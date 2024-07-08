const express=require("express")
const db=require("../config/db")
const { Op } = require('sequelize');
const sequelize = require("../config/sequilize")
const { Sequelize } = require("sequelize");

const router=express.Router()

router.get("/get",async(req,res)=>{
  //  const result=await db.User.findAl()
    //const result =await db.Site.findAll();
    const query = `SELECT * FROM Site ;`
        try {
            const result = await sequelize.query(query, {
    
              mapToModel: true // pass true here if you want Sequelize to map the query results to model instances
            });
            
            const newResult=result[0]

            console.log(newResult)
            
    
            res.json({ data: newResult })
    
          }catch(err){
            console.log(err)
          }
})

module.exports=router