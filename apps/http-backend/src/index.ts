import express from "express"
import {client} from "@repo/db/Client"
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hi there");
})
app.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password =req.body.password;

    const User=await client.user.create({
        data:{
            username,
            password
        }
    })
    res.json({
        message:"Signup successfull",
        id:User.id
    })
})

app.listen(3002);