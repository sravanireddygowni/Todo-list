const mongoose=require('mongoose');
const TodoSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
        default:false
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('todo',TodoSchema);