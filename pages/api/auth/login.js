
import {db} from "../db.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { NextResponse, NextRequest } from 'next/server'
import  { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt"


// pages/api/hello.ts
import { serialize } from "cookie";


export default function handler(req, res) {
    const q = "SELECT * FROM user where username = ?"
    
    db.query(q,[req.body.username],async(err,data)=>{
      if(err){
        return res.status(500).json(err)
      }
      if (data.length === 0) return res.status(404).json("User does not exists!")
      const checkpassword = bcrypt.compareSync(req.body.password,data[0].password)
      if(!checkpassword) return res.status(400).json("Username or Password is wrong!")

 
      const {password , ...other} = data[0]

      const token = await getToken({ req, secret })
    
        const cookie = serialize("accessToken", data[0].id, {
            httpOnly: true,
            path: "/",
        });

  res.setHeader("Set-Cookie", cookie);
  res.status(200).json(other);
})
}



// export default function handler(req, res) {
  
//     console.log(req.body)
//     const q = "SELECT * FROM user where username = ?"
    
//     db.query(q,[req.body.username],async(err,data)=>{
//       if(err){
//         return res.status(500).json(err)
//       }
//       if (data.length === 0) return res.status(404).json("User does not exists!")
//       const checkpassword = bcrypt.compareSync(req.body.password,data[0].password)
//       if(!checkpassword) return res.status(400).json("Username or Password is wrong!")

//       const token = jwt.sign({id:data[0].id},"secretkey")
//       const {password , ...other} = data[0]
//       res.status(200).json(other)
//     })
//     }