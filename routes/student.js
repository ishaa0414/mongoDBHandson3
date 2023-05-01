const express=require("express");
const studentCOntroller=require("../controllers/student")
const router=express.Router();

router.post('/student', studentCOntroller.saveStudentData);
router.get('/student:firstName',studentCOntroller.getStudentData)
router.put('/student',studentCOntroller.updateStudentData)

module.exports=router;
