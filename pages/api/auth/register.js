
import {db} from "../db.js"
import bcrypt from "bcryptjs"

export default function handler(req, res) {
  
console.log(req.body)
const q = "SELECT * FROM user where username = ?"

db.query(q,[req.body.username],async(err,data)=>{
  if(err){
    return res.status(500).json(err)
  }
  if (data.length) return res.status(409).json("User already exists!")
  const salt = bcrypt.genSaltSync(10)
  const hashpassword = bcrypt.hashSync(req.body.password,salt)

  const q = "insert into user(username,password,email,name) values (?)"
  const values = [req.body.username,hashpassword,req.body.email,req.body.name]
  db.query(q,[values],async (err,data)=>{
    if(err){
      return res.status(500).json(err)
    }else{
      return res.status(200).json("User has been created")
    }
  })
})
}
