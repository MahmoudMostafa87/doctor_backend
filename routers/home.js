const {getAllData}=require("../controller/home");
const router=require("express").Router();

router.get("/",getAllData);//done

module.exports=router;