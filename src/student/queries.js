const getStudentQuery="SELECT * FROM student";
const getStudentByIdQuery="SELECT * FROM student WHERE id =$1";
const checkEmailExists="SELECT s FROM student s WHERE s.email=$1";
const addStudentQuery="INSERT INTO student (name,email,age,birthday) VALUES ($1,$2,$3,$4)";
const removeStudentQuery="DELETE FROM student WHERE id=$1";
const updateStudentQuery="UPDATE student SET name=$1 WHERE id=$2";
module.exports={
    getStudentQuery,
    getStudentByIdQuery,
    checkEmailExists,
    addStudentQuery,
    removeStudentQuery,
    updateStudentQuery
};