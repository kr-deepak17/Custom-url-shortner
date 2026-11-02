const express=require('express');
const {handleGenrateNewshortUrl,handleGetAnalytics}=require('../controllers/url');
const router = express.Router();

router.post('/',handleGenrateNewshortUrl);
router.get("/analytics/:ShortID",handleGetAnalytics);
module.exports=router;