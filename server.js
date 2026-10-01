const express= require('express');
const mongoose=require('mongoose');
const TodoSchema=require('./model');



const app = express();
 app.use(express.json());
 mongoose.connect("mongodb://127.0.0.1:27017/Todolist")
 .then(()=>console.log("connected to mongoose"))
 .catch((err)=> console.log(err))

app.post('/add_todo',async(req,res)=>{
    
    const{title}=req.body;
    const{description}=req.body;
    try{
        const newData=new TodoSchema({title,description})
        await newData.save()
        return res.json({message:"  add a new todo task to the database"})
        }
        catch(err){
            console.log(err.message);
        }
})

app.put('/update_todo/:id',async(req,res)=>{
    const{title}=req.body;
    const{description}=req.body;
    try{
        await TodoSchema.findByIdAndUpdate(req.params.id,{title,description},{new:true});
    return res.json({message:" user data updated succssesfull"})
        }
        catch(err){
            console.log(err.message);
        }


})
app.get('/get_all_todos', async(req,res)=>{
    try{
        const allData = await TodoSchema.find()
        return res.json(allData)
    }
     catch(err){
            console.log(err.message);
        }
})
app.get('/get_data/:id', async(req,res)=>{
    try{
        const Data=await TodoSchema.findById(req.params.id)
        return res.json(Data)
    }
     catch(err){
            console.log(err.message);
        }
})
app.delete('/delete_todo/:id',async(req,res)=>{
    try{
        await TodoSchema.findByIdAndDelete(req.params.id);
        return res.json({message:"user data deleted succsesfully"})
    }
     catch(err){
            console.log(err.message);
     }
        })
    

 app.listen(3000,()=>console.log('server running on' ))