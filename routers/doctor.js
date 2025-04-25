const {addDoctor,
    deleteDoctor,
    getAllDoctor,
    getSpcificDoctor,
    updateDoctor,
    updateNameDoctor,
    updateSpcificThingInDoctor,
    createDoctor
}=require("../controller/doctor");
const router=require("express").Router();

router.route('/doctors')
.get(getAllDoctor)//done used
.post(addDoctor)//done
.patch(updateNameDoctor);//done 

router.post("/doctor/addDoctor",createDoctor);//done used

router.route('/doctor/:id')
.get(getSpcificDoctor)//done used
.put(updateDoctor)//done used
.patch(updateSpcificThingInDoctor)//done
.delete(deleteDoctor);//done used

module.exports=router;