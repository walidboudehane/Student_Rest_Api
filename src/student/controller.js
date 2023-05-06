const pool= require('../../db');
const queries=require('./queries');
const getStudents=(req,res)=>{
    pool.query(queries.getStudentQuery,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const getStudentById=(req,res)=>{
    const id=parseInt(req.params.id);

    pool.query(queries.getStudentByIdQuery,[id],(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
const addStudent=(req,res)=>{
    const {name,email,age,birthday}=req.body;
    //check if email exists
    pool.query(queries.checkEmailExists,[email],(error,results)=>{
        if (results.rows.length){
            res.send("Email already exists");
            
        };
        
        pool.query(queries.addStudentQuery,
                [name,email,age,birthday]
                ,(error,results)=>{
                    if (error) { throw error};
                    res.status(201).send("Student created successfully");
                    console.log("student creat");
        
                }
            );
        });
};
const removeStudent=(req,res)=>{
    const id=parseInt(req.params.id);

    pool.query(queries.getStudentByIdQuery,[id],(error,results)=>{
        notFound=!results.rows.length
        if (notFound){
        res.send('student doesnt exist in database');
        }

        pool.query(queries.removeStudentQuery,[id],(error,results)=>{
            if (error) throw error;
            res.status(200).send("student deleted successfuly");
        });
        
    });

};
const updateStudent=(req,res)=>{
    const id=parseInt(req.params.id);
    const {name}=req.body;
    pool.query(queries.getStudentByIdQuery,[id],(error,results)=>{
        notFound=!results.rows.length
        if (notFound){
        res.send('student doesnt exist in database');
        }
        pool.query(queries.updateStudentQuery,[name,id],(error,results)=>{
            if (error) throw error;
            res.status(200).send("student's name updated successfuly");
        });
    });
};

module.exports={getStudents,
                getStudentById,
                addStudent,
                removeStudent,
                updateStudent};