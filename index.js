const express = require('express')
const app = express()
require("dotenv").config();
const port = process.env.PORT || 300
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/raj",(req,res)=>{
    res.send("hey we are getting ready for a new project")
})

app.get("/home",(req,res)=>{
    res.send("this is my home page.")
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})


// require("dotenv").config();
// console.log(process.env)