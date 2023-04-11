// import express from 'express'
// import dotenv from 'dotenv' 
// import cors from "cors"
// import {db} from "./db.js"
// import userRouter from "./routes/users.js"
// import postRouter from "./routes/posts.js"
// import likeRouter from "./routes/likes.js"
// import commentsRouter from "./routes/comments.js"
// import authRouter from "./auth/register.js/index.js"

// import pkg from 'pg'
// import cookieParser from 'cookie-parser'
// import { getCookieParser } from 'next/dist/server/api-utils/index.js'


// // import { S3Client , PutObjectCommand} from "@aws-sdk/client-s3"
// // import multer from "multer";
// // import crypto from "crypto"

// export default function handler(req, res) {
//    res.status(200).json({ name: 'John Doe' })
//    }


// // dotenv.config()
// const app = express()
// app.use(express.json())
// app.use(getCookieParser())

// const {Client} = pkg;
// const client = new Client({
//   host: "postgres.cwetg1bggv8k.us-east-1.rds.amazonaws.com",
//   port: 5432,
//   user: "postgres",
//   password : "Kian9530",
//   database : "myDb",
//   dialect: "postgres",
// })

// app.use(cors({
//   origin: true,
//   optionsSuccessStatus: 200,
//   credentials: true,
// }));


// // const randomImageName = ()=> crypto.randomBytes(8).toString("hex")


// // app.listen("3001",()=>{
// //   console.log("Running on 3001")
// // })

// app.use("/api/auth",authRouter)
// app.use("/api/users",userRouter)
// app.use("/api/posts",postRouter)
// app.use("/api/likes",likeRouter)
// app.use("/api/comments",commentsRouter)



// app.get("/",(req,res)=>{

//   const q = "SELECT * FROM post"
//   client.connect()
//   client.query(q,async(err,data)=>{
//     if(err){
//       console.log(err)
//     }
//     res.json(data.rows)
//     console.log("Hello")
//   })

// })



// // const storage = multer.memoryStorage()
// // const upload = multer({storage:storage})


// // const s3 = new S3Client({ 
// //   region: process.env.BUCKET_REGION,
// //   credentials : {
// //     accessKeyId: process.env.ACCESS_KEY,
// //     secretAccessKey: process.env.SECRET_KEY
// //   }
// //  });

// //  app.post("/uploads",upload.single("file"),async (req,res)=>{
 

// //     const imageName = randomImageName()
  
// //     const prams = {
// //       Bucket: process.env.BUCKET_NAME,
// //       Key:  imageName ,
// //       Body: req.file.buffer,
// //       ContentType: req.file.mimetype
  
// //     }

    
  

// //     const command = new PutObjectCommand(prams)
  
// //     await s3.send(command )
   
// //     res.status(200).json(imageName);
  



// //  })








   



  
    












 