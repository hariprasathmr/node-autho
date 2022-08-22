const express = require("express");
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use("/",express.static("public"))
app.post("/login",(req,res)=>{

    if(req.body.username=="hari"&&req.body.password=="hari"){
        res.redirect("https://hariprasathmr.github.io/task-one/")
        return
    }
    res.sendFile(__dirname+"/img.jpg")
})

app.listen(process.env.PORT || 3000)