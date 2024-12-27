const express = require("express")

const app = express()    //instace of express js application 

app.use("/sant_dhnyneshwar" ,(req,res)=>{
    res.send("sant dhnyneshwar ")
})

app.use("/ganesh",(req,res)=>{
    res.send("ganesh shet  ")
})

app.use("/swami",(req,res)=>{
    res.send("swami samarth")
})

app.use("/sant_tukaram",(req,res)=>{
    res.send("sant tukaram")
})

app.use("/",(req,res)=>{
    res.send("sant dhnyneshwar , ganesh shet , swami samarth , sant tukaram ")
})





app.listen(3000,()=>{
    console.log("server listening on port 3000")
})