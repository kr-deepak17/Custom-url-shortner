const express = require("express");

const {connectToMongo} = require('./connections');

const urlroute=require('./routes/url');
const URL=require("./models/url");

const app = express();
const PORT=8001;

connectToMongo('mongodb://localhost:27017/short-url')
.then(()=>console.log("mongoDb conneted"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url",urlroute);

app.get("/:ShortID",async(req,res)=>{
    const  shortid=req.params.ShortID;
    const entry =await URL.findOneAndUpdate(
        {
            ShortID:shortid
    },
    {
        $push:{
        visitHistory:{
            timestamp:Date.now(),
        },
        },
    }
 );
 res.redirect(entry.redirectURL);

})

// app.get("/analytics/:ShortID");

app.listen(PORT,()=>console.log(`Server started at PORT :${PORT}`));
