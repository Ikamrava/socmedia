import express from "express";

const router = express.Router()

router.get("/find/:userId",(req,res)=>{
    res.json("this is the one")
})

export default router