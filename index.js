const express = require("express");
const path = require("path");
const cookieParser =require("cookie-parser");

const {connectToMongo} = require('./connections');
const {restrictToLoggedinUsersOnly,checkAuth}=require("./middlewares/auth");


const URL=require("./models/url");

const urlroute=require('./routes/url');
const staticRoute=require("./routes/staticRouter");
const userRoute=require("./routes/user");


const app = express();
const PORT=8001;

connectToMongo('mongodb://localhost:27017/short-url')
.then(()=>console.log("mongoDb conneted"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));



app.use("/url",restrictToLoggedinUsersOnly,urlroute);
app.use("/user",userRoute);
app.use("/",checkAuth,staticRoute);

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
