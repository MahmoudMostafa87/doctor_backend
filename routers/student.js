const {addStudent,
    createStudent,
    addStudentByHardcore,
    deleteStudent,
    getAllStudent,
    getSpcificStudent,
    updateNameStudent,
    updateSpcificThingInStudent,
    updateStudent,
}=require("../controller/student");
const router=require("express").Router();

router.post("/addStudent",createStudent);//done used


router.route('/students')
.get(getAllStudent)//done used
.post(addStudent)//done
.patch(updateNameStudent);//done

//fares
router.route('/student/:id')
.get(getSpcificStudent)//done used
.put(updateStudent)//done used
.patch(updateSpcificThingInStudent)//done
.delete(deleteStudent);//done used

router.post("/student/first-student",addStudentByHardcore);//done

module.exports=router;