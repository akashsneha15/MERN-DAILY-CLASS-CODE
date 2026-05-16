const express= require("express");
const app=express();
const PORT=5000;

const connection=require("./config/db")
app.use(express.json())
connection();
const studentRouter=require("./routes/studentRouter")
const collegeRouter=require("./routes/collegeRouter")

//students is the main router it will not be changed 
//studentRouter will execute based on the request

app.use("/students",studentRouter)
app.use("/college",collegeRouter)

app.listen(PORT,()=>{
    console.log("Server is running on port",PORT);
    
})

