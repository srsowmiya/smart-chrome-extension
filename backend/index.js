import express from 'express'
import cors from "cors"

const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Backend is running successfully")
})

app.listen(3000,()=>{
    console.log('port started at localhost 3000')
})