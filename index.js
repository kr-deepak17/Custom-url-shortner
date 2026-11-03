const express = require("express");
const path = require("path");

const {connectToMongo} = require('./connections');

const urlroute=require('./routes/url');
const staticRoute=require("./routes/staticRouter");
const URL=require("./models/url");

const app = express();
const PORT=8001;

connectToMongo('mongodb://localhost:27017/short-url')
.then(()=>console.log("mongoDb conneted"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));





app.use("/url",urlroute);

app.use("/",staticRoute);

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
 if (!entry) return res.status(404).send("Short URL not found");
 res.redirect(entry.redirectURL);

})

// app.get("/analytics/:ShortID");

app.listen(PORT,()=>console.log(`Server started at PORT :${PORT}`));
