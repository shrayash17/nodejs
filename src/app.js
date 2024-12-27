const express = require("express")

const app = express()    //instace of express js application 


app.get("/abc/:age/:rollno",(req,resp)=>{
    console.log(req.params)
    resp.send({firstname:"shrayash",lastname:"gawade"})
})


app.post("/user",(req,resp)=>{
    // saving data to db 
    resp.send("data saved sucessfully")
})

app.delete("/user",(req,resp)=>{
    resp.send("deleted shet ")
})

// app.use("/",(req,res)=>{
//     res.send("sant dhnyneshwar , ganesh shet , swami samarth , sant tukaram ")
// })













app.listen(3000,()=>{
    console.log("server listening on port 3000")
})