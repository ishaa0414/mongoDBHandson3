const {Student}=require("../models/student");
const  saveStudentData=async(req,res)=>{
    const studentData=req.body;
    console.log(studentData);
    try {
        const studentObj=new Student({
            firstName:studentData.firstName,
            lastName:studentData.lastName,
            age:studentData.age,
            email:studentData.email,
            contact:studentData.contact,
            courses:studentData.courses,
            cgpa:studentData.cgpa
        });
      const result=  await studentObj.save();
        return res.status(200).send(result);
    } catch (error) {
      return res.status(500).send({message:"Something went wrong while processing the data"})  ;

    }
}

module.exports={
    saveStudentData
}