const shortid=require("shortid");
const URL=require("../models/url")
async function handleGenrateNewshortUrl(req,res){
    const shortID=shortid();
    console.log(req.body);
    const body=req.body;
    if(!body.url)return res.status(400).json({error:"url is required"});
    // check is url exist
    const existingURL=await URL.findOne({
        redirectURL:body.url
    });
    if(existingURL){
       return res.render("home",{
        id:existingURL.ShortID
       })
    }
    await URL.create({
        ShortID:shortID,
        redirectURL:body.url,
        visitHistory:[],

    })
    return res.render('home',{
        id:shortID,
    });
    


}


async function handleGetAnalytics(req,res){
    const shortid=req.params.ShortID;
    const result=await URL.findOne({ShortID:shortid});
    return res.json({
        totolClicks:result.visitHistory.length,
        analytics:result.visitHistory,
    });
    

};

module.exports={handleGenrateNewshortUrl,handleGetAnalytics,

}