const express =require('express');
const studentRoutes=require('./src/student/routes');
const app =express();

const port=5000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.use('/student',studentRoutes);
app.listen(port,()=>console.log('app listening at port ' +port));